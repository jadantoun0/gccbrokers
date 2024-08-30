import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface FetchResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T,>(url: string, page: number, limit: number, name: string): FetchResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      let requestUrl = `${url}?page=${page}&limit=${limit}`;
      if (name) {
        requestUrl += `&name=${name}`;
      }
      const response = await axios.get<T[]>(requestUrl);
      if (page == 1) {
        setData(response.data);
      } else {
        setData((prevData) => [...prevData, ...response.data]);
      }
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, [page, name]);

  return { data, loading, error };
};
