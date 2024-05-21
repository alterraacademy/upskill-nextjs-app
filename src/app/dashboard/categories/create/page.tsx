"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createCategory } from "@/utils/actions/categories";

export default function Page() {
  return (
    <div>
      <p>Add new category</p>
      <form action={createCategory}>
        <Input name="name" placeholder="Name" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
