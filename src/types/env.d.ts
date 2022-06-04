interface ImportMetaEnv {
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string;
  readonly VITE_KAKAO_RESTAPI_KEY: string;
  readonly VITE_KAKAO_OPEN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
