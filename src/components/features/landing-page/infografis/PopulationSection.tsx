import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mars, UserRound, UsersRound, Venus } from "lucide-react";
import StatsCard from "@/components/StatsCard";

export default function PopulationSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Data Populasi Penduduk
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCard
          amount={1}
          icon={
            <div className="p-4 bg-green-100 rounded-xl">
              <UsersRound className="w-8 h-8 text-green-500" />
            </div>
          }
          title="Total Penduduk"
        />
        <StatsCard
          amount={1}
          icon={
            <div className="p-4 bg-red-100 rounded-xl">
              <UserRound className="w-8 h-8 text-red-500" />
            </div>
          }
          title="Kepala Keluarga"
        />
        <StatsCard
          amount={1}
          icon={
            <div className="p-4 bg-orange-100 rounded-xl">
              <UsersRound className="w-8 h-8 text-orange-500" />
            </div>
          }
          title="Anggota Keluarga"
        />
        <StatsCard
          amount={1}
          icon={
            <div className="p-4 bg-blue-100 rounded-xl">
              <Mars className="w-8 h-8 text-blue-500" />
            </div>
          }
          title="Laki-laki"
        />
        <StatsCard
          amount={1}
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
