CREATE TABLE IF NOT EXISTS public.video_chunks_tmp (
  seq integer PRIMARY KEY,
  chunk text NOT NULL
);
GRANT SELECT, INSERT, DELETE ON public.video_chunks_tmp TO anon, authenticated;
GRANT ALL ON public.video_chunks_tmp TO service_role;
ALTER TABLE public.video_chunks_tmp ENABLE ROW LEVEL SECURITY;
CREATE POLICY "tmp all" ON public.video_chunks_tmp FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);