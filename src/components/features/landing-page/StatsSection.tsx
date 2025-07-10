import { Button } from "@/components/ui/button";
import { dataPenduduk } from "@/constants/data";
import { ArrowRight, Mars, UserRound, UsersRound, Venus } from "lucide-react";
import StatsCard from "../../StatsCard";
import React, { useMemo } from "react";

export default function StatsSection() {
  const numberOfCitizens = useMemo(() => {
    let total = 0;
    for (const penduduk of dataPenduduk) {
      total += penduduk.numberOfMale + penduduk.numberOfFemale;
    }
    return total;
  }, []);
  const numberOfHeadFamily = useMemo(() => {
    let total = 0;
    for (const penduduk of dataPenduduk) {
      total += penduduk.numberOfHeadFamily;
    }
    return total;
  }, []);
  const numberOfFemale = useMemo(() => {
    let total = 0;
    for (const penduduk of dataPenduduk) {
      total += penduduk.numberOfFemale;
    }
    return total;
  }, []);
  const numberOfMale = useMemo(() => {
    let total = 0;
    for (const penduduk of dataPenduduk) {
      total += penduduk.numberOfMale;
    }
    return total;
  }, []);

  return (
    <section className="py-24 px-24 bg-white">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Data Penduduk
        </h2>
        <Button
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg group"
        >
          Detail
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCard
          amount={numberOfCitizens}
          icon={
            <div className="p-4 bg-green-100 rounded-xl">
              <UsersRound className="w-8 h-8 text-green-500" />
            </div>
          }
          title="Penduduk"
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
      </div>
    </section>
  );
}
