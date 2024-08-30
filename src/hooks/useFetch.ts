import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface FetchResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T,>(url: string, page: number, limit: number): FetchResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const isMounted = useRef(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<T[]>(`${url}?page=${page}&limit=${limit}`);
      setData((prevData) => [...prevData, ...response.data]);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if it's the first mount
    if (isMounted.current) {
      // This will run on page changes
      fetchData();
    } else {
      // This will run only once, on initial render
      isMounted.current = true;
    }
  }, [page]);

  return { data, loading, error };
};
