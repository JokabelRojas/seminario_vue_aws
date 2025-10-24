import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ywvmwabfhimghehyqaxr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dm13YWJmaGltZ2hlaHlxYXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNDU4NDEsImV4cCI6MjA3NjgyMTg0MX0.mPjP_iVMN-E_zoUGKHNTQEqP5cCX51ROu7bWMyvASYk'

export const supabase= createClient(supabaseUrl,supabaseKey)
