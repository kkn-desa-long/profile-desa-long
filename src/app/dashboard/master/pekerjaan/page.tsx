import React from "react";
import JobIndex from "@/components/features/dashboard/pekerjaan";
import { db } from "@/lib/supabase/api";

export default async function MasterPekerjaan() {
  const { data: jobs } = await db.jobs.getAll();

  return <JobIndex jobs={jobs || []} />;
}
