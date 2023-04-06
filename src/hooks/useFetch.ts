import { useCallback, useEffect, useState } from 'react';

import axiosInstance from '../services/axiosInstance';

export interface FetchOptions {
  requestData?: any,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  immediate?: boolean
}

function useFetch(url: string, options: FetchOptions = {}) {
  const { requestData = null, method = 'GET', immediate = true } = options;

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const execute = useCallback(() => {
    let promise;

    if (method === 'GET') {
      promise = axiosInstance.get(url);
    } else if (method === 'POST') {
      promise = axiosInstance.post(url, requestData);
    } else if (method === 'PUT') {
      promise = axiosInstance.put(url, requestData);
    } else if (method === 'DELETE') {
      promise = axiosInstance.delete(url);
    } else if (method === 'PATCH') {
      promise = axiosInstance.patch(url, requestData);
    }

    return promise?.then((response) => {
      if (response.status == 200) {
        setData(response.data);
      } else {
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setError('Unknown error');
        }
      }
      setIsLoading(false);
    }).catch((err) => {
      // console.log(error);
      setIsLoading(false);
      setError(err);
    });
  }, [url]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, error, isLoading, execute };
}

export default useFetch;