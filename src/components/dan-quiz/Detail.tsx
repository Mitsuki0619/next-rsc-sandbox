import React from "react";

/* @ts-expect-error Async Server Component */
export const Detail: React.FC = async () => {
  console.log("pending");
  const detail = await fetchDetail();
  console.log(detail);

  return <div>{detail.name}</div>;
};

const fetchDetail = async () => {
  await new Promise((resolve, reject) => {
    setInterval(resolve, 3000);
  });
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();
  return data;
};
