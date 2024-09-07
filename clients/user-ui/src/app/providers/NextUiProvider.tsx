// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { graphql } from "../graphql/gpl.setup";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={graphql}>
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
