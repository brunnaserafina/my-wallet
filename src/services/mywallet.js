import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
  const token = JSON.parse(localStorage.getItem("mywallet")).token;

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

function getTransactions() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/transactions`, config);
  return promise;
}

function postTransaction(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/transactions`, body, config);
  return promise;
}

function deleteSignOut() {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/sign-out`, config);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getTransactions,
  postTransaction,
  deleteSignOut,
};
