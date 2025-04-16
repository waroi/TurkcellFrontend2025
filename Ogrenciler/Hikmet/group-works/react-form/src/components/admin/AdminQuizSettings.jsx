import React from "react";
import { useAdminQuizSettings } from "../../hooks/useAdminQuizSettings";

const AdminQuizSettings = () => {
  const { settings, updateSettingField, saveSettings, loading, error } =
    useAdminQuizSettings();

  const handleSave = async () => {
    const success = await saveSettings();
    if (success) {
      alert("Settings updated successfully!");
    } else {
      alert("Failed to update settings.");
    }
  };

  if (loading) return <p>Loading quiz settings...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="admin-settings card p-3 mb-4">
      <h3>Quiz Settings</h3>
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Easy Questions:</label>
          <input
            type="number"
            className="form-control"
            min="0"
            value={settings.easyCount}
            onChange={(e) => updateSettingField("easyCount", e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Medium Questions:</label>
          <input
            type="number"
            className="form-control"
            min="0"
            value={settings.mediumCount}
            onChange={(e) => updateSettingField("mediumCount", e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Hard Questions:</label>
          <input
            type="number"
            className="form-control"
            min="0"
            value={settings.hardCount}
            onChange={(e) => updateSettingField("hardCount", e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default AdminQuizSettings;
