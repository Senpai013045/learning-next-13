"use client";

import { Button } from "@/components/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="text-red-500 mb-4">{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
