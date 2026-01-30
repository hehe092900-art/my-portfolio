import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qsjiniqdobcdjrowmiov.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzamluaXFkb2JjZGpyb3dtaW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNDczNTAsImV4cCI6MjA4NDcyMzM1MH0.z_IgQjkY0NSfywhV4kS3q7-3W9mWOnIebVCIKXjS5xY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
