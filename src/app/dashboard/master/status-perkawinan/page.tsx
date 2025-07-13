import React from "react";
import MarriageStatusIndex from "@/components/features/dashboard/status-perkawinan";
import { db } from "@/lib/supabase/api";

export default async function MasterStatusPerkawinan() {
  const { data: marriageStatus } = await db.marriageStatus.getAll();
  return <MarriageStatusIndex marriageStatus={marriageStatus || []} />;
}
