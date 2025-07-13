import React from "react";
import TribesIndex from "@/components/features/dashboard/suku";
import { db } from "@/lib/supabase/api";

export default async function MasterSuku() {
  const { data: tribes } = await db.tribes.getAll();
  return <TribesIndex tribes={tribes || []} />;
}
