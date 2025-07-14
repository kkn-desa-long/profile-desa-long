import PopulationIndex from "@/components/features/dashboard/populasi";
import { db } from "@/lib/supabase/api";
import React from "react";

export default async function StatistikPopulasi() {
  const { data } = await db.population.getAll();
  const { data: hamlets } = await db.hamlets.getAll();
  return <PopulationIndex population={data || []} hamlets={hamlets || []} />;
}
