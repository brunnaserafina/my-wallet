import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function getTransactions(token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/transactions`, config);
  return promise;
}

function postTransaction(body, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/transactions`, body, config);
  return promise;
}

export { postSignIn, postSignUp, getTransactions, postTransaction };
