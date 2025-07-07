#!/bin/bash

# Script to generate and automatically add a Supabase CRUD API object
# to the src/lib/supabase/api.ts file.
#
# Usage:
# 1. Save this script as a file, e.g., `generate_crud.sh`
# 2. Make it executable: `chmod +x generate_crud.sh`
# 3. Run it from your project's root directory with the table name as an argument.
#    Example: ./generate_crud.sh products
#
# This script will insert the new TypeScript code block into the
# `src/lib/supabase/api.ts` file just before the closing brace of the `db` object.

# --- CONFIGURATION ---
API_FILE_PATH="src/lib/supabase/api.ts"


# --- SCRIPT LOGIC ---

# 1. Validate input
if [ -z "$1" ]; then
  echo "❌ Error: Table name not provided."
  echo "Usage: $0 <table_name>"
  exit 1
fi

if [ ! -f "$API_FILE_PATH" ]; then
  echo "❌ Error: File not found at '$API_FILE_PATH'"
  echo "Make sure you are running this script from your project's root directory."
  exit 1
fi

TABLE_NAME=$1

# 2. Generate CRUD code block
CRUD_BLOCK=$(cat << EOF
  $TABLE_NAME: {
    getAll: async () => {
      return await supabase.from("$TABLE_NAME").select();
    },
    getById: async (id: string) => {
      return await supabase.from("$TABLE_NAME").select().eq("id", id).single();
    },
    create: async (data: TablesInsert<"$TABLE_NAME">) => {
      return await supabase.from("$TABLE_NAME").insert(data);
    },
    update: async (id: string, data: TablesUpdate<"$TABLE_NAME">) => {
      return await supabase.from("$TABLE_NAME").update(data).eq("id", id);
    },
    delete: async (id: string) => {
      return await supabase.from("$TABLE_NAME").delete().eq("id", id);
    },
  },
EOF
)

# 3. Insert code into the file
TMP_FILE=$(mktemp)
# Use awk to safely insert the code block before the final `};` of the `db` object.
awk -v code="$CRUD_BLOCK" '
  BEGIN { inserted = 0 }
  /^[[:space:]]*};[[:space:]]*$/ && !inserted {
    print code;
    inserted = 1;
  }
  { print }
' "$API_FILE_PATH" > "$TMP_FILE" && mv "$TMP_FILE" "$API_FILE_PATH"

# 4. Display success message
echo "✅ Success! CRUD for table '$TABLE_NAME' has been added to '$API_FILE_PATH'."
