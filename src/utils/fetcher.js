import axios from "axios";

export const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization:
          JSON.parse(localStorage.getItem("user"))?.accessToken || "",
      },
    })
    .then((res) => res.data);
