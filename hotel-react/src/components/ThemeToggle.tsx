
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-gold" />
      ) : (
        <Moon className="h-5 w-5 text-gold" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
