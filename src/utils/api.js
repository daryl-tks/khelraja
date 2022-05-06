import axios from "axios";
import { get } from "lodash";
import {  getToken } from "@utils/localStorage";
// import { initializeStore } from "../store";
const API_URL = process.env.REACT_APP_API_URL;

// const accessKey = getKey();

const handleErrors = async (error) => ({
  data: get(error, "response.data", null),
  status: get(error, "response.status", null),
  error: true
});

const handleSuccess = (response) => ({
  data: response.data,
  status: response.status,
  success: true
});

const privateHeader = (token) => {
  // const accessToken = getToken();
  return {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache",
    "Access-Control-Allow-Headers": "X-Requested-With"
    // "X-Access-Token": `${token || accessToken}`
    // "X-Access-Type": `Account`
    // "X-Access-Type": `${accessKey || getKey()}`,
  };
};

const publicHeader = () => ({
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "X-Requested-With"
});

const api = (token) => {
  const accessToken_1 = getToken();

  const request = axios.create({
    baseURL: API_URL,
    responseType: "json",
    headers: accessToken_1 ? privateHeader(token) : publicHeader()
  });

  // Response interceptor for API calls
  request.interceptors.response.use(
    (response) => response,
    async (error) => {
      // const { status, data } = error.response;
      // if (status === 401) {
      //   const { dispatch } = initializeStore();
      //   dispatch({ type: "POST_LOGOUT", payload: data.message });
      // }
      return Promise.reject(error);
    }
  );

  return request;
};

const request = {
  get: (url, data, token) =>
    api(token)
      .get(API_URL + url)
      .then(handleSuccess)
      .catch(handleErrors),
  post: (url, data) =>
    api()
      .post(API_URL + url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  put: (url, data) =>
    api()
      .put(API_URL + url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  patch: (url, data) =>
    api()
      .patch(API_URL + url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  delete: (url) =>
    api()
      .delete(API_URL + url)
      .then(handleSuccess)
      .catch(handleErrors)
};

export default request;
