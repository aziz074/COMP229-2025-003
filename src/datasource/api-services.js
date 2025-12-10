let apiURL = import.meta.env.VITE_APP_APIURL;
import { getToken } from "../components/auth/auth-helper";

export const listServices = async () => {
  try {
    const res = await fetch(apiURL + "/api/services");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getService = async (id) => {
  try {
    const res = await fetch(apiURL + "/api/services/" + id);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const createService = async (service) => {
  try {
    const res = await fetch(apiURL + "/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(service),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const updateService = async (id, service) => {
  try {
    const res = await fetch(apiURL + "/api/services/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(service),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const deleteService = async (id) => {
  try {
    const res = await fetch(apiURL + "/api/services/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
