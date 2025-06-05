import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Supabase URL and Key must be set in environment variables");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
