import axios from "axios";

let API = null;

if (process.env.NODE_ENV === "development") {
  API = axios.create({
    baseURL: "http://localhost:5000",
  });
} else {
  API = axios;
}

API.create().interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// USER API CALLS
export const registerAPI = (data) => API.post("/authentication/register", data);
export const loginAPI = (data) => API.post("/authentication/login", data);
export const updateUserAPI = (data) =>
  API.patch("/authentication/update", data);

// PRODUCTS API CALLS

// CATEGORIES API CALLS

// ORDER API CALLS
