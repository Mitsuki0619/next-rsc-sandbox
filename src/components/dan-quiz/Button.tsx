"use client";

import { useRouter } from "next/navigation";
import React, { startTransition, useTransition } from "react";

export const Button: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  console.log("Button.tsx rendering");
  const handleClick = async () => {
    startTransition(() => router.refresh());
  };

  return (
    <button onClick={handleClick}>
      {isPending ? "Refreshing" : "Refresh"}
    </button>
  );
};
