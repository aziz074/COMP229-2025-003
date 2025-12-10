import { jwtDecode } from "jwt-decode";

const authenticate = (token) => {
  if (typeof window !== "undefined") {
    console.log("Saving token:", token);
    sessionStorage.setItem("token", token);

    const decoded = jwtDecode(token);
    console.log("Decoded:", decoded);

    if (decoded.email) {
      sessionStorage.setItem("username", decoded.email);
    }
  }
};

const getToken = () => {
  if (typeof window === "undefined") return null;
  const token = sessionStorage.getItem("token");
  console.log("Getting token:", token);
  return token;
};

const isAuthenticated = () => {
  return !!getToken();
};

const getUsername = () => {
  return sessionStorage.getItem("username");
};

const clearJWT = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
};

export { authenticate, isAuthenticated, getToken, getUsername, clearJWT };
