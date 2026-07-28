CREATE TABLE public.apk_page_content (
  id TEXT PRIMARY KEY,
  app_name TEXT NOT NULL,
  apk_url TEXT NOT NULL,
  screenshot_url TEXT NOT NULL,
  screenshot_alt TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.apk_page_content TO anon;
GRANT SELECT ON public.apk_page_content TO authenticated;
GRANT ALL ON public.apk_page_content TO service_role;

ALTER TABLE public.apk_page_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "APK page content is public to read"
ON public.apk_page_content
FOR SELECT
TO anon, authenticated
USING (true);

CREATE OR REPLACE FUNCTION public.update_apk_page_content_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_apk_page_content_updated_at
BEFORE UPDATE ON public.apk_page_content
FOR EACH ROW
EXECUTE FUNCTION public.update_apk_page_content_updated_at();

INSERT INTO public.apk_page_content (id, app_name, apk_url, screenshot_url, screenshot_alt)
VALUES (
  'scm-sarl',
  'SCM SARL',
  '/__l5e/assets-v1/840ae8ed-5221-499c-885c-540c5c65d7d1/scm-sarl.apk',
  '/__l5e/assets-v1/714db20d-c69f-4034-8777-b2a8a86449f9/scm-app-blue.jpg',
  'Aperçu de l''application SCM SARL'
);