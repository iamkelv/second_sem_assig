import { useEffect, useState } from "react";

export const useHttp = (url, message, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Something went wrongs`);
        }
        const data = await response.json();
        setData(data.results);
      } catch (err) {
        setError(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, message, refresh, setRefresh]);
  return { data, error, loading, refresh };
};
