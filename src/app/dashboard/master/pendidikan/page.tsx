import React from "react";
import EducationIndex from "@/components/features/dashboard/pendidikan";
import { db } from "@/lib/supabase/api";

export default async function MasterPendidikan() {
  const { data: educations } = await db.educations.getAll();

  return <EducationIndex educations={educations || []} />;
}
