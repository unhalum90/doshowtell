"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    // Return default values if not in provider (SSR or error pages)
    if (!context) {
        return {
            theme: "system" as Theme,
            setTheme: () => { },
            resolvedTheme: "light" as const,
        };
    }
    return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored) setThemeState(stored);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        let resolved: "light" | "dark";

        if (theme === "system") {
            resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } else {
            resolved = theme;
        }

        setResolvedTheme(resolved);
        root.classList.remove("light", "dark");
        root.classList.add(resolved);
        root.style.colorScheme = resolved;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (theme === "system") {
                const newResolved = mediaQuery.matches ? "dark" : "light";
                setResolvedTheme(newResolved);
                root.classList.remove("light", "dark");
                root.classList.add(newResolved);
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) return <>{children}</>;

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
