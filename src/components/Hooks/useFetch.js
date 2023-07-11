import { useState, useCallback } from "react";
import axios from "axios";

export const useFetch = (fetchMethod) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, data = null) => {
    setIsLoading(true);
    setError(null);
    try {
      let response;
      if (fetchMethod === "POST") {
        response = await axios.post(url, data);
      } else if (fetchMethod === "GET") {
        response = await axios.get(url);
      } else if (fetchMethod === "DELETE") {
        response = await axios.delete(url);
      }
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, [fetchMethod]);
  // Added fetchMethod as a dependency, in useEffect client was sending infinite requests to the server.
  // Implemented useCallback to prevent this.

  return [fetchData, isLoading, error];
};
// import { useState, useCallback } from "react";
// import axios from "axios";

// export const useFetch = (fetchMethod) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(
//     async (url, data = null) => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         let response;
//         const options = {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         };
//         if (fetchMethod === "POST") {
//           response = await axios.post(url, data, options);
//         } else if (fetchMethod === "GET") {
//           response = await axios.get(url, options);
//         } else if (fetchMethod === "DELETE") {
//           response = await axios.delete(url, options);
//         }
//         setIsLoading(false);
//         return response.data;
//       } catch (error) {
//         setIsLoading(false);
//         setError(error);
//       }
//     },
//     [fetchMethod]
//   );
//   return [fetchData, isLoading, error];
// };
