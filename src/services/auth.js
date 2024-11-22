const api = import.meta.env.VITE_API_URL;

export const login = (data) => {
  return fetch(api + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const userRegister = (data) => {
  return fetch(api + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};
