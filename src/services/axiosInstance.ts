import Axios from 'axios';

// Add a request interceptor
Axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('JWT')) {
      config.headers!.Authorization = `Bearer ${localStorage.getItem('JWT')}`;
    }
    config.baseURL = import.meta.env.VITE_API_URL;

    return config;
  },
  (error) => Promise.reject(error),
);

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  patch: Axios.patch,
};