import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);

  return (
    <div className="flex flex-col space-y-1 p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="justify-start"
        onClick={() => setLanguage("en")}
      >
        <span className="mr-2">🇺🇸</span>
        <span>English</span>
      </Button>
      <Button
        variant={language === "tr" ? "default" : "ghost"}
        size="sm"
        className="justify-start"
        onClick={() => setLanguage("tr")}
      >
        <span className="mr-2">🇹🇷</span>
        <span>Türkçe</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;