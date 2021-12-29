import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(getDate, []);

  function getDate() {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setdata(data.data.children);
          setisLoading(false);
        })
        .catch((error) => {
          seterror("Error!, check your URL again!");
          setisLoading(false);
        });
    }, 500);
  }
  return [data, isLoading, error];
};
