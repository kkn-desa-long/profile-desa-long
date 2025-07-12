import React from "react";
import VillageGovernmentIndex from "@/components/features/dashboard/pemerintahan";
import { db } from "@/lib/supabase/api";

export default async function Pemerintahan() {
  const { data: villageGovernment } = await db.villageGovernment.getAll();
  return <VillageGovernmentIndex villageGovernment={villageGovernment || []} />;
}
