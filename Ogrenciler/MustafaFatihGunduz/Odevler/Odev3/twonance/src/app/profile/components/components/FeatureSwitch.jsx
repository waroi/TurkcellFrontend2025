import React from "react";
import Switch from "react-switch";
const FeatureSwitch = ({ label, checked = true }) => {
  return (
    <div className="d-flex algin-items-center justify-content-between py-93">
      <p className="text-dark fw-bold display-2">{label}</p>
      <Switch
        onColor="#3772FF"
        offColor="#E5E5E5"
        checkedIcon={false}
        height={24}
        checked={checked}
        onChange={null}
      />
    </div>
  );
};

export default FeatureSwitch;
