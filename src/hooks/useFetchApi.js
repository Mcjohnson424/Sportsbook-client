import { useEffect, useState } from "react";

export default function useFetchApi(
  apiFunction,
  params = {},
  query,
  triggers = []
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunction(params, query);
      if (result.data) {
        setData(result.data);
      } else {
        setData([]);
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, triggers);
  return {
    getData,
    loading,
    error,
    data,
    setLoading,
    setError,
  };
}
