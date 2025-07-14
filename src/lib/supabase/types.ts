export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      age_range: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      education: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      gallery: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          img_url: string;
          title: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          img_url: string;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          img_url?: string;
          title?: string;
        };
        Relationships: [];
      };
      hamlets: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      head_speeches: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          speeches: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          speeches: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          speeches?: string;
        };
        Relationships: [];
      };
      jobs: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      marriage_status: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      tribes: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      village_government: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          img_url: string;
          title: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          img_url: string;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          img_url?: string;
          title?: string;
        };
        Relationships: [];
      };
      villagers_age: {
        Row: {
          age_range_id: string;
          created_at: string;
          hamlet_id: string;
          id: string;
          number_of_female: number;
          number_of_male: number;
        };
        Insert: {
          age_range_id: string;
          created_at?: string;
          hamlet_id: string;
          id?: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Update: {
          age_range_id?: string;
          created_at?: string;
          hamlet_id?: string;
          id?: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Relationships: [
          {
            foreignKeyName: "villagers_age_age_range_id_fkey";
            columns: ["age_range_id"];
            isOneToOne: false;
            referencedRelation: "age_range";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "villagers_age_hamlet_id_fkey";
            columns: ["hamlet_id"];
            isOneToOne: false;
            referencedRelation: "hamlets";
            referencedColumns: ["id"];
          }
        ];
      };
      villagers_education: {
        Row: {
          created_at: string;
          education_id: string;
          hamlet_id: string | null;
          id: string;
          number_of_female: number;
          number_of_male: number;
        };
        Insert: {
          created_at?: string;
          education_id: string;
          hamlet_id?: string | null;
          id?: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Update: {
          created_at?: string;
          education_id?: string;
          hamlet_id?: string | null;
          id?: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Relationships: [
          {
            foreignKeyName: "villagers_education_education_id_fkey";
            columns: ["education_id"];
            isOneToOne: false;
            referencedRelation: "education";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "villagers_education_hamlet_id_fkey";
            columns: ["hamlet_id"];
            isOneToOne: false;
            referencedRelation: "hamlets";
            referencedColumns: ["id"];
          }
        ];
      };
      villagers_job: {
        Row: {
          created_at: string;
          hamlet_id: string;
          id: string;
          job_id: string;
          number_of_female: number;
          number_of_male: number;
        };
        Insert: {
          created_at?: string;
          hamlet_id: string;
          id?: string;
          job_id: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Update: {
          created_at?: string;
          hamlet_id?: string;
          id?: string;
          job_id?: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Relationships: [
          {
            foreignKeyName: "villagers_job_hamlet_id_fkey";
            columns: ["hamlet_id"];
            isOneToOne: false;
            referencedRelation: "hamlets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "villagers_job_job_id_fkey";
            columns: ["job_id"];
            isOneToOne: false;
            referencedRelation: "jobs";
            referencedColumns: ["id"];
          }
        ];
      };
      villagers_marriage: {
        Row: {
          created_at: string;
          hamlet_id: string;
          id: string;
          marriage_status_id: string;
          number_of_female: number;
          number_of_male: number;
        };
        Insert: {
          created_at?: string;
          hamlet_id: string;
          id?: string;
          marriage_status_id: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Update: {
          created_at?: string;
          hamlet_id?: string;
          id?: string;
          marriage_status_id?: string;
          number_of_female?: number;
          number_of_male?: number;
        };
        Relationships: [
          {
            foreignKeyName: "villagers_marriage_hamlet_id_fkey";
            columns: ["hamlet_id"];
            isOneToOne: false;
            referencedRelation: "hamlets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "villagers_marriage_marriage_status_id_fkey";
            columns: ["marriage_status_id"];
            isOneToOne: false;
            referencedRelation: "marriage_status";
            referencedColumns: ["id"];
          }
        ];
      };
      villagers_population: {
        Row: {
          created_at: string;
          hamlet_id: string;
          id: string;
          number_of_family_member: number;
          number_of_female: number;
          number_of_head_family: number;
          number_of_male: number;
          hamlets: {
            name: string;
          };
        };
        Insert: {
          created_at?: string;
          hamlet_id: string;
          id?: string;
          number_of_family_member?: number;
          number_of_female?: number;
          number_of_head_family?: number;
          number_of_male?: number;
        };
        Update: {
          created_at?: string;
          hamlet_id?: string;
          id?: string;
          number_of_family_member?: number;
          number_of_female?: number;
          number_of_head_family?: number;
          number_of_male?: number;
        };
        Relationships: [
          {
            foreignKeyName: "villagers_population_hamlet_id_fkey";
            columns: ["hamlet_id"];
            isOneToOne: false;
            referencedRelation: "hamlets";
            referencedColumns: ["id"];
          }
        ];
      };
      villagers_tribe: {
        Row: {
          created_at: string;
          hamlet_id: string;
          id: string;
          numbers: number;
          tribe_id: string;
        };
        Insert: {
          created_at?: string;
          hamlet_id: string;
          id?: string;
          numbers?: number;
          tribe_id: string;
        };
        Update: {
          created_at?: string;
          hamlet_id?: string;
          id?: string;
          numbers?: number;
          tribe_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "villagers_tribe_hamlet_id_fkey";
            columns: ["hamlet_id"];
            isOneToOne: false;
            referencedRelation: "hamlets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "villagers_tribe_tribe_id_fkey";
            columns: ["tribe_id"];
            isOneToOne: false;
            referencedRelation: "tribes";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
