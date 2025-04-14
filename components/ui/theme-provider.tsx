"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  themes?: string[];
  forcedTheme?: string;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Using type assertion to avoid TypeScript errors
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <NextThemesProvider {...props as any}>{children}</NextThemesProvider>
} 