declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_PRIVATE_KEY: string;
      VITE_PUBLIC_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
