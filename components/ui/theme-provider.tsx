"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps as NextThemeProviderProps } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode;
} & NextThemeProviderProps

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
