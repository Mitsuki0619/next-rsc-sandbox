"use client";
import React, { Suspense, useState } from "react";
import { Loading } from "./loading";

export const Toggle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [status, setStatus] = useState<"on" | "off">("off");
  const handleClick = () => {
    if (status === "off") {
      setStatus("on");
      return;
    }
    setStatus("off");
  };
  return (
    <div>
      <button onClick={handleClick}>{status}</button>
      <Suspense fallback={<Loading />}>
        {status === "on" ? children : null}
      </Suspense>
    </div>
  );
};
