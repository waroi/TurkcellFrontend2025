import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageContext } from "@/context/LanguageContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  return (
    <div className="flex flex-col space-y-1 p-1">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="sm"
        className="justify-start"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4 mr-2" />
        <span>{t("theme.light")}</span>
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="sm"
        className="justify-start"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4 mr-2" />
        <span>{t("theme.dark")}</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start"
        onClick={() => {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          setTheme(prefersDark ? "dark" : "light");
        }}
      >
        <Monitor className="h-4 w-4 mr-2" />
        <span>{t("theme.system")}</span>
      </Button>
    </div>
  );
};

export default ThemeSwitcher;