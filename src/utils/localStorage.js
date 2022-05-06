const token = "MYSUKI_TOKEN";
const key = "MYSUKI_KEY";

export const setToken = (accessToken) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(token, accessToken);
  }
  return accessToken;
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(token);
  }
};

export const deleteToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(token);
  }
};

export const setKey = (accessKey) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, accessKey);
  }
  return accessKey;
};

export const getKey = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

export const deleteKey = () => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  }
};

export const setNewKey = (keyName, newKey = "") => {
  if (typeof window !== "undefined") {
    localStorage.setItem(keyName, newKey);
  }
  return newKey;
};
