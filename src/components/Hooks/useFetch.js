import { useState } from "react";
import axios from "axios";

export const useFetch = (fetchMethod) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, data = null) => {
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
  };

  return [fetchData, isLoading, error];
};
