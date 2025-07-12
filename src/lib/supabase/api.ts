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
};
