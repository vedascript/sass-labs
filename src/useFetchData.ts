import { useEffect, useState } from "react";
import { ApiResponse } from "./types";

function useFetchData() {
  const [data, setData] = useState<Array<ApiResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      const responseData = await response.json();

      if (!responseData) {
        throw new Error("Failed to fetch data. Please try again.");
      }

      setData(responseData);
      console.log(responseData);
    } catch (err) {
      if (err instanceof Error && err.message) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, errorMessage };
}

export default useFetchData;
