import { create } from "zustand";
import axios from "axios";
import { mutate } from "swr";

export const useStore = create((set) => ({
  selectedItems: [],
  addToSelected: (item) =>
    set((state) => ({ selectedItems: [...state.selectedItems, item] })),
  removeFromSelected: (item) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((i) => i !== item),
    })),
  deleteSelected: () => {
    const { selectedItems } = useStore.getState();

    // Create an array of DELETE requests
    const deleteRequests = selectedItems.map((sku) =>
      axios.delete(
        `http://localhost/e-commerce-app-kutalmis/products/delete/${sku}`
      )
    );

    // Execute all DELETE requests
    axios
      .all(deleteRequests)
      .then(async (responses) => {
        // If all responses have status code 200, then proceed to mutate and clear selection
        if (responses.every((response) => response.status === 200)) {
          await mutate(
            "http://localhost/e-commerce-app-kutalmis/products/exhibit"
          );
          useStore.setState({ selectedItems: [] });
        } else {
          throw new Error("Not all delete requests were successful");
        }
      })
      .catch((error) => {
        console.error("Error deleting items:", error);
      });
  },
  deleteAll: () => {
    axios
      .delete("http://localhost/e-commerce-app-kutalmis/products/deleteAll")
      .then(async (response) => {
        if (response.status === 200) {
          await mutate(
            "http://localhost/e-commerce-app-kutalmis/products/exhibit"
          );
        } else {
          throw new Error("Mass deletion was not successful");
        }
      })
      .catch((error) => {
        console.error("Error deleting all items:", error);
      });
  },
}));
