import React from "react";

/* @ts-expect-error Async Server Component */
export const Detail: React.FC<{ note: string }> = async ({ note }) => {
  console.log(`pending ${note}`);
  const detail = await fetchDetail(note);
  console.log(detail);

  return <div>{detail.name}</div>;
};

const fetchDetail = async (note: string) => {
  await new Promise((resolve, reject) => {
    setInterval(resolve, 3000);
  });
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${note}`);
  const data = await res.json();
  return data;
};
