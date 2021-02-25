import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestData(initialData, url) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  }, [url]);
  return data;
}
