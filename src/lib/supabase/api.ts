import { createClient } from "./client";
import { TablesInsert, TablesUpdate } from "./types";

const supabase = createClient();

export const db = {
  gallery: {
    getAll: async () => {
      return await supabase.from("gallery").select();
    },
    getById: async (id: string) => {
      return await supabase.from("gallery").select().eq("id", id).single();
    },
    create: async (galleryData: TablesInsert<"gallery">) => {
      return await supabase.from("gallery").insert(galleryData);
    },
    update: async (id: string, galleryData: TablesUpdate<"gallery">) => {
      return await supabase.from("gallery").update(galleryData).eq("id", id);
    },
    delete: async (id: string) => {
      return await supabase.from("gallery").delete().eq("id", id);
    },
  },
  educations: {
    getAll: async () => {
      return await supabase.from("education").select();
    },
    getById: async (id: string) => {
      return await supabase.from("education").select().eq("id", id).single();
    },
    create: async (educationData: TablesInsert<"education">) => {
      return await supabase.from("education").insert(educationData);
    },
    update: async (id: string, educationData: TablesUpdate<"education">) => {
      return await supabase
        .from("education")
        .update(educationData)
        .eq("id", id);
    },
    delete: async (id: string) => {
      return await supabase.from("education").delete().eq("id", id);
    },
  },
  jobs: {
    getAll: async () => {
      return await supabase.from("jobs").select();
    },
    getById: async (id: string) => {
      return await supabase.from("jobs").select().eq("id", id).single();
    },
    create: async (jobsData: TablesInsert<"jobs">) => {
      return await supabase.from("jobs").insert(jobsData);
    },
    update: async (id: string, jobsData: TablesUpdate<"jobs">) => {
      return await supabase.from("jobs").update(jobsData).eq("id", id);
    },
    delete: async (id: string) => {
      return await supabase.from("jobs").delete().eq("id", id);
    },
  },
  ageRange: {
    getAll: async () => {
      return await supabase.from("age_range").select();
    },
    getById: async (id: string) => {
      return await supabase.from("age_range").select().eq("id", id).single();
    },
    create: async (ageRangeData: TablesInsert<"age_range">) => {
      return await supabase.from("age_range").insert(ageRangeData);
    },
    update: async (id: string, ageRangeData: TablesUpdate<"age_range">) => {
      return await supabase.from("age_range").update(ageRangeData).eq("id", id);
    },
    delete: async (id: string) => {
      return await supabase.from("age_range").delete().eq("id", id);
    },
  },
  villageGovernment: {
    getAll: async () => {
      return await supabase.from("village_government").select();
    },
    getById: async (id: string) => {
      return await supabase
        .from("village_government")
        .select()
        .eq("id", id)
        .single();
    },
    create: async (
      villageGovernmentData: TablesInsert<"village_government">
    ) => {
      return await supabase
        .from("village_government")
        .insert(villageGovernmentData);
    },
    update: async (
      id: string,
      villageGovernmentData: TablesUpdate<"village_government">
    ) => {
      return await supabase
        .from("village_government")
        .update(villageGovernmentData)
        .eq("id", id);
    },
    delete: async (id: string) => {
      return await supabase.from("village_government").delete().eq("id", id);
    },
  },
};
