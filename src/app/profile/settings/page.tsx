"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Page() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </Button>
      <input type="text" onChange={(e) => setWord(e.target.value)} />
      <p>{count} time</p>
      <p>{word}</p>
    </div>
  );
}
