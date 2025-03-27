import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AdminQuizSettings = () => {
  const [settings, setSettings] = useState({ easyCount: 3, mediumCount: 3, hardCount: 4 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        console.log("Fetching quiz settings...");
        const settingsRef = doc(db, "quiz_settings", "default");
        const settingsSnap = await getDoc(settingsRef);

        if (settingsSnap.exists()) {
          const fetchedSettings = settingsSnap.data();
          console.log("Settings found:", fetchedSettings);

          setSettings({
            easyCount: fetchedSettings.easyCount ?? 3,
            mediumCount: fetchedSettings.mediumCount ?? 3,
            hardCount: fetchedSettings.hardCount ?? 4,
          });
        } else {
          console.warn("No quiz settings found, using default values.");
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
        setError("Failed to load settings");
      } finally {
        setLoading(false);
      }
    };
    
    fetchSettings();
  }, []);

  const updateSettings = async () => {
    try {
      const validatedSettings = {
        easyCount: isNaN(settings.easyCount) ? 3 : Math.max(0, Math.round(settings.easyCount)),
        mediumCount: isNaN(settings.mediumCount) ? 3 : Math.max(0, Math.round(settings.mediumCount)),
        hardCount: isNaN(settings.hardCount) ? 4 : Math.max(0, Math.round(settings.hardCount)),
      };

      console.log("Updating settings:", validatedSettings);
      await setDoc(doc(db, "quiz_settings", "default"), validatedSettings);
      setSettings(validatedSettings);
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
      setError("Failed to update settings");
      alert("Failed to update settings.");
    }
  };

  if (loading) return <p>Loading quiz settings...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="admin-settings">
      <h3>Quiz Settings</h3>
      <div>
        <label>Easy Questions:</label>
        <input
          type="number"
          min="0"
          value={settings.easyCount}
          onChange={(e) =>
            setSettings({ ...settings, easyCount: isNaN(parseInt(e.target.value)) ? 0 : Math.max(0, parseInt(e.target.value)) })
          }
        />
      </div>
      <div>
        <label>Medium Questions:</label>
        <input
          type="number"
          min="0"
          value={settings.mediumCount}
          onChange={(e) =>
            setSettings({ ...settings, mediumCount: isNaN(parseInt(e.target.value)) ? 0 : Math.max(0, parseInt(e.target.value)) })
          }
        />
      </div>
      <div>
        <label>Hard Questions:</label>
        <input
          type="number"
          min="0"
          value={settings.hardCount}
          onChange={(e) =>
            setSettings({ ...settings, hardCount: isNaN(parseInt(e.target.value)) ? 0 : Math.max(0, parseInt(e.target.value)) })
          }
        />
      </div>
      <button onClick={updateSettings}>Save Settings</button>
    </div>
  );
};

export default AdminQuizSettings;
