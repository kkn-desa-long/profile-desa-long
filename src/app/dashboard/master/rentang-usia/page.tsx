import React from "react";
import AgeRangeIndex from "@/components/features/dashboard/rentang-usia";
import { db } from "@/lib/supabase/api";

export default async function MasterRentangUsia() {
  const { data: ageRange } = await db.ageRange.getAll();
  return <AgeRangeIndex ageRange={ageRange || []} />;
}
