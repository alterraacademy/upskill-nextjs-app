import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import ButtonNav from "./button-nav";

import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  async function handleButton() {
    "use server";

    console.log("test");
    redirect("/profile/settings");
  }

  return (
    <div>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <form action={handleButton}>
        <Button type="submit">Edit Profile</Button>
      </form>
      <Link className={buttonVariants({})} href="/profile/settings">
        Edit Profile
      </Link>
      <ButtonNav />
    </div>
  );
}
