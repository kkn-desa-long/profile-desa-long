import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mars, UserRound, UsersRound, Venus } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import { villagersPopulation } from "@/constants/data";

export default function PopulationSection() {
  const numberOfCitizens = useMemo(() => {
    let total = 0;
    for (const penduduk of villagersPopulation) {
      total += penduduk.numberOfMale + penduduk.numberOfFemale;
    }
    return total;
  }, []);
  const numberOfHeadFamily = useMemo(() => {
    let total = 0;
    for (const penduduk of villagersPopulation) {
      total += penduduk.numberOfHeadFamily;
    }
    return total;
  }, []);
  const numberOfFamilyMember = useMemo(() => {
    let total = 0;
    for (const penduduk of villagersPopulation) {
      total += penduduk.numberOfFamilyMembers;
    }
    return total;
  }, []);
  const numberOfFemale = useMemo(() => {
    let total = 0;
    for (const penduduk of villagersPopulation) {
      total += penduduk.numberOfFemale;
    }
    return total;
  }, []);
  const numberOfMale = useMemo(() => {
    let total = 0;
    for (const penduduk of villagersPopulation) {
      total += penduduk.numberOfMale;
    }
    return total;
  }, []);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Data Populasi Penduduk
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCard
          amount={numberOfCitizens}
          icon={
            <div className="p-4 bg-green-100 rounded-xl">
              <UsersRound className="w-8 h-8 text-green-500" />
            </div>
          }
          title="Total Penduduk"
        />
        <StatsCard
          amount={numberOfHeadFamily}
          icon={
            <div className="p-4 bg-red-100 rounded-xl">
              <UserRound className="w-8 h-8 text-red-500" />
            </div>
          }
          title="Kepala Keluarga"
        />
        <StatsCard
          amount={numberOfFamilyMember}
          icon={
            <div className="p-4 bg-orange-100 rounded-xl">
              <UsersRound className="w-8 h-8 text-orange-500" />
            </div>
          }
          title="Anggota Keluarga"
        />
        <StatsCard
          amount={numberOfMale}
          icon={
            <div className="p-4 bg-blue-100 rounded-xl">
              <Mars className="w-8 h-8 text-blue-500" />
            </div>
          }
          title="Laki-laki"
        />
        <StatsCard
          amount={numberOfFemale}
          icon={
            <div className="p-4 bg-pink-100 rounded-xl">
              <Venus className="w-8 h-8 text-pink-500" />
            </div>
          }
          title="Perempuan"
        />
      </CardContent>
    </Card>
  );
}
