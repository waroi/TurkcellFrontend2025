import React from "react";
import Typography from "../Atoms/Typography";
import BootIcon from "../Atoms/BootIcon";

function ViewFeatures() {
  return (
    <div className="flex items-center justify-center mb-3 gap-3">
      <Typography variant="h4">Özellikleri İncele </Typography>
      <BootIcon iconName={"arrow-right"} size={20} />
    </div>
  );
}

export default ViewFeatures;
