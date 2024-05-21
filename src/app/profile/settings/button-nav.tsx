import React from "react";

import { Button } from "@/components/ui/button";
import { handleButton } from "@/utils/actions/handle";

export default function ButtonNav() {
  return (
    <form action={handleButton}>
      <Button type="submit">Edit Profile</Button>
    </form>
  );
}
