export interface VillagersPopulation {
  id: string;
  numberOfMale: number;
  numberOfFemale: number;
  numberOfHeadFamily: number;
  numberOfFamilyMembers: number;
  dusun: number;
}

export interface VillagersMarriage {
  id: string;
  numbers: number;
  marriageStatus: string;
}

export interface VillagersAge {
  id: string;
  numberOfMale: number;
  numberOfFemale: number;
  ageRange: string;
}

export interface VillagersEducation {
  id: string;
  numbers: number;
  education: string;
}

export interface VillagersJob {
  id: string;
  numbers: number;
  job: string;
}

export interface VillagersTribe {
  id: string;
  numbers: number;
  tribe: string;
}
