import {
  VillagersAge,
  VillagersEducation,
  VillagersJob,
  VillagersMarriage,
  VillagersPopulation,
  VillagersTribe,
} from "@/types/data";

export const villagersPopulation: VillagersPopulation[] = [
  {
    id: "1",
    numberOfMale: 100,
    numberOfFemale: 94,
    numberOfHeadFamily: 59,
    numberOfFamilyMembers: 135,
    dusun: 1,
  },
  {
    id: "2",
    numberOfMale: 108,
    numberOfFemale: 95,
    numberOfHeadFamily: 64,
    numberOfFamilyMembers: 139,
    dusun: 2,
  },
  {
    id: "3",
    numberOfMale: 125,
    numberOfFemale: 94,
    numberOfHeadFamily: 68,
    numberOfFamilyMembers: 151,
    dusun: 3,
  },
  {
    id: "4",
    numberOfMale: 113,
    numberOfFemale: 102,
    numberOfHeadFamily: 63,
    numberOfFamilyMembers: 152,
    dusun: 4,
  },
  {
    id: "5",
    numberOfMale: 89,
    numberOfFemale: 74,
    numberOfHeadFamily: 51,
    numberOfFamilyMembers: 112,
    dusun: 5,
  },
];

export const villagersAge: VillagersAge[] = [
  {
    id: "1",
    numberOfMale: 16,
    numberOfFemale: 13,
    ageRange: "0-1",
  },
  {
    id: "2",
    numberOfMale: 34,
    numberOfFemale: 30,
    ageRange: "2-4",
  },
  {
    id: "3",
    numberOfMale: 48,
    numberOfFemale: 36,
    ageRange: "5-9",
  },
  {
    id: "4",
    numberOfMale: 55,
    numberOfFemale: 46,
    ageRange: "10-14",
  },
  {
    id: "5",
    numberOfMale: 64,
    numberOfFemale: 52,
    ageRange: "15-19",
  },
  {
    id: "6",
    numberOfMale: 51,
    numberOfFemale: 40,
    ageRange: "20-24",
  },
  {
    id: "7",
    numberOfMale: 35,
    numberOfFemale: 27,
    ageRange: "25-29",
  },
  {
    id: "8",
    numberOfMale: 31,
    numberOfFemale: 46,
    ageRange: "30-34",
  },
  {
    id: "9",
    numberOfMale: 36,
    numberOfFemale: 37,
    ageRange: "35-39",
  },
  {
    id: "10",
    numberOfMale: 42,
    numberOfFemale: 34,
    ageRange: "40-44",
  },
  {
    id: "11",
    numberOfMale: 38,
    numberOfFemale: 22,
    ageRange: "45-49",
  },
  {
    id: "12",
    numberOfMale: 27,
    numberOfFemale: 30,
    ageRange: "50-54",
  },
  {
    id: "13",
    numberOfMale: 24,
    numberOfFemale: 15,
    ageRange: "55-59",
  },
  {
    id: "14",
    numberOfMale: 16,
    numberOfFemale: 18,
    ageRange: "60-64",
  },
  {
    id: "15",
    numberOfMale: 5,
    numberOfFemale: 4,
    ageRange: "65-69",
  },
  {
    id: "16",
    numberOfMale: 10,
    numberOfFemale: 12,
    ageRange: "70>",
  },
];

export const villagersMarriage: VillagersMarriage[] = [
  {
    id: "1",
    numbers: 340,
    marriageStatus: "Kawin Dengan Buku Nikah",
  },
  {
    id: "2",
    numbers: 135,
    marriageStatus: "Kawin Tanpa Buku Nikah",
  },
  {
    id: "3",
    numbers: 469,
    marriageStatus: "Belum Kawin",
  },
  {
    id: "4",
    numbers: 7,
    marriageStatus: "Cerai Hidup",
  },
  {
    id: "5",
    numbers: 43,
    marriageStatus: "Cerai Mati",
  },
];

export const villagersEducation: VillagersEducation[] = [
  {
    id: "1",
    education: "Tidak/Belum Sekolah",
    numbers: 185,
  },
  {
    id: "2",
    education: "Belum Tamat/SD Sederajat",
    numbers: 140,
  },
  {
    id: "3",
    education: "Tamat/SD Sederajat",
    numbers: 316,
  },
  {
    id: "4",
    education: "SLTP-Sederajat",
    numbers: 150,
  },
  {
    id: "5",
    education: "SLTA-Sederajat",
    numbers: 170,
  },
  {
    id: "6",
    education: "Diploma I/II",
    numbers: 0,
  },
  {
    id: "7",
    education: "Akademi/Diploma III/S. Muda",
    numbers: 9,
  },
  {
    id: "8",
    education: "Diploma IV/Strata I",
    numbers: 22,
  },
  {
    id: "9",
    education: "Strata II",
    numbers: 2,
  },
  {
    id: "10",
    education: "Strata III",
    numbers: 0,
  },
];

export const villagersJob: VillagersJob[] = [
  {
    id: "1",
    job: "Belum/Tidak Bekerja",
    numbers: 211,
  },
  {
    id: "2",
    job: "Mengurus Rumah Tangga",
    numbers: 215,
  },
  {
    id: "3",
    job: "Pelajar/Mahasiswa",
    numbers: 248,
  },
  {
    id: "4",
    job: "Pensiunan",
    numbers: 1,
  },
  {
    id: "5",
    job: "Pegawai Negeri Sipil",
    numbers: 11,
  },
  {
    id: "6",
    job: "Tentara Nasional Indonesia",
    numbers: 0,
  },
  {
    id: "7",
    job: "Kepolisian RI",
    numbers: 0,
  },
  {
    id: "8",
    job: "Petani/Pekebun",
    numbers: 194,
  },
  {
    id: "9",
    job: "Peternak",
    numbers: 0,
  },
  {
    id: "10",
    job: "Nelayan/Perikanan",
    numbers: 5,
  },
  {
    id: "11",
    job: "Transportasi",
    numbers: 0,
  },
  {
    id: "12",
    job: "Karyawan Swasta",
    numbers: 12,
  },
  {
    id: "13",
    job: "Karyawan Honorer",
    numbers: 9,
  },
  {
    id: "14",
    job: "Buruh Harian Lepas",
    numbers: 16,
  },
  {
    id: "15",
    job: "Buruh Tani/Perkebunan",
    numbers: 9,
  },
  {
    id: "16",
    job: "Tukang Cukur",
    numbers: 0,
  },
  {
    id: "17",
    job: "Tukang Listrik",
    numbers: 0,
  },
  {
    id: "18",
    job: "Tukang Batu",
    numbers: 4,
  },
  {
    id: "19",
    job: "Tukang Kayu",
    numbers: 1,
  },
  {
    id: "20",
    job: "Tukang Las/Pandai Besi",
    numbers: 1,
  },
  {
    id: "21",
    job: "Tukang Jahit",
    numbers: 1,
  },
  {
    id: "22",
    job: "Bidan",
    numbers: 0,
  },
  {
    id: "23",
    job: "Perawat",
    numbers: 1,
  },
  {
    id: "24",
    job: "Sopir",
    numbers: 0,
  },
  {
    id: "25",
    job: "Pedagang",
    numbers: 11,
  },
  {
    id: "26",
    job: "Perangkat Desa",
    numbers: 20,
  },
  {
    id: "27",
    job: "Kepala Desa",
    numbers: 1,
  },
  {
    id: "27",
    job: "Wiraswasta",
    numbers: 23,
  },
];

export const villagesTribe: VillagersTribe[] = [
  {
    id: "1",
    tribe: "Alawiyyin",
    numbers: 13,
  },
  {
    id: "2",
    tribe: "Banggai",
    numbers: 1,
  },
  {
    id: "3",
    tribe: "Bugis",
    numbers: 491,
  },
  {
    id: "4",
    tribe: "Buol",
    numbers: 13,
  },
  {
    id: "5",
    tribe: "Bajo",
    numbers: 14,
  },
  {
    id: "6",
    tribe: "Bali",
    numbers: 4,
  },
  {
    id: "7",
    tribe: "Bolano",
    numbers: 8,
  },
  {
    id: "8",
    tribe: "Dampelas",
    numbers: 191,
  },
  {
    id: "9",
    tribe: "Duri",
    numbers: 5,
  },
  {
    id: "10",
    tribe: "Gorontalo",
    numbers: 13,
  },
  {
    id: "11",
    tribe: "Jawa",
    numbers: 50,
  },
  {
    id: "12",
    tribe: "Kaili",
    numbers: 49,
  },
  {
    id: "13",
    tribe: "Lauje",
    numbers: 34,
  },
  {
    id: "14",
    tribe: "Mandar",
    numbers: 58,
  },
  {
    id: "15",
    tribe: "Mori",
    numbers: 5,
  },
  {
    id: "16",
    tribe: "Manado",
    numbers: 1,
  },
  {
    id: "17",
    tribe: "Minang",
    numbers: 1,
  },
  {
    id: "18",
    tribe: "Pamona",
    numbers: 2,
  },
  {
    id: "19",
    tribe: "Pendau",
    numbers: 28,
  },
  {
    id: "20",
    tribe: "Sunda",
    numbers: 8,
  },
  {
    id: "21",
    tribe: "Tator",
    numbers: 2,
  },
  {
    id: "22",
    tribe: "Tionghoa",
    numbers: 3,
  },
];
