import axios from 'axios';

const onRequestSent = (config) => {
  return config;
};

const onRequestError = (error) => {
  // Do something with request error
  return Promise.reject(error);
};

const onResponseSuccess = (response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
};

const onResponseError = (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
};

// Add a request interceptor
axios.interceptors.request.use(onRequestSent, onRequestError);
// Add a response interceptor
axios.interceptors.response.use(onResponseSuccess, onResponseError);
