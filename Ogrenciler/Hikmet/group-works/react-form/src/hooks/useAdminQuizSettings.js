import { useState, useEffect } from "react";
import { fetchQuizSettings, updateQuizSettings } from "../services/quizService";

export const useAdminQuizSettings = () => {
  const [settings, setSettings] = useState({
    easyCount: 3,
    mediumCount: 3,
    hardCount: 4,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSettings = async () => {
      try {
        console.log("Fetching quiz settings...");
        const fetchedSettings = await fetchQuizSettings();

        setSettings({
          easyCount: fetchedSettings.easyCount ?? 3,
          mediumCount: fetchedSettings.mediumCount ?? 3,
          hardCount: fetchedSettings.hardCount ?? 4,
        });
      } catch (err) {
        console.error("Error fetching settings:", err);
        setError("Failed to load settings");
      } finally {
        setLoading(false);
      }
    };

    getSettings();
  }, []);

  const saveSettings = async () => {
    try {
      const validatedSettings = {
        easyCount: isNaN(settings.easyCount)
          ? 3
          : Math.max(0, Math.round(settings.easyCount)),
        mediumCount: isNaN(settings.mediumCount)
          ? 3
          : Math.max(0, Math.round(settings.mediumCount)),
        hardCount: isNaN(settings.hardCount)
          ? 4
          : Math.max(0, Math.round(settings.hardCount)),
      };

      console.log("Updating settings:", validatedSettings);
      await updateQuizSettings(validatedSettings);
      setSettings(validatedSettings);
      return true;
    } catch (error) {
      console.error("Error updating settings:", error);
      setError("Failed to update settings");
      return false;
    }
  };

  const updateSettingField = (field, value) => {
    const numValue = parseInt(value);
    setSettings({
      ...settings,
      [field]: isNaN(numValue) ? 0 : Math.max(0, numValue),
    });
  };

  return {
    settings,
    updateSettingField,
    saveSettings,
    loading,
    error,
  };
};
