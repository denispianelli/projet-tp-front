import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            'Content-Type': 'application/json',
          },
        });
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (fetchError) {
        setError(fetchError);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => setIsLoading(true);
  }, [url, JSON.stringify(options)]);

  return { data, isLoading, error };
};

export default useFetch;
