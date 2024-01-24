import { useState } from "react";
import { GITA_API } from "../utils/constants";

export const useGetsloka = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (chapter, verse) => {
    try {
      const response = await fetch(`${GITA_API}${chapter}/${verse}`);
      const fetchedData = await response.json();

      setData(fetchedData);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, error, fetchData };
};
