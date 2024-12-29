const voucherDestroy = async (id, token) => {
  const api = import.meta.env.VITE_API_URL + "/vouchers/" + id;
  let res = await fetch(api, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export default voucherDestroy;
