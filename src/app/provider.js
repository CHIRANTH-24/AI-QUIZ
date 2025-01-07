"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

import db from "../../configs/db";
import { USER_TABLE } from "../../configs/schema";
import { eq } from "drizzle-orm";

function  Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      CheckIsNewUser();
    }
  }, [user]);

  const CheckIsNewUser = async () => {
    try {
      const name = user?.fullName || "unknown re";
      const email = user?.primaryEmailAddress?.emailAddress || "noemail@gmail.com";

      if (!name) {
        console.error("User name is undefined.");
        return;
      }

      const result = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.name, name));

      if (result?.length === 0) {
        // Use upsert to avoid duplicates
        const userResponse = await db
          .insert(USER_TABLE)
          .values({
            name: name,
            email: email
          })
          .onConflictDoNothing(); // Prevents duplicate insertion
        console.log(userResponse);
      }
    } catch (e) {
      console.error("Error in CheckIsNewUser:", e);
    }
  };

  return <div>{children}</div>;
}

export default Provider;
