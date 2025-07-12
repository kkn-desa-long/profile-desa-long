import React from "react";
import HamletsIndex from "@/components/features/dashboard/dusun";
import { db } from "@/lib/supabase/api";

export default async function MasterDusun() {
  const { data: hamlets } = await db.hamlets.getAll();
  return <HamletsIndex hamlets={hamlets || []} />;
}
