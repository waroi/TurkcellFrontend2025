import React from "react";
import Select from "../../inputs/Select";
import selectMap from "../../util/selectMap";
import { preferences } from "../../schemas/application";

export default function InternshipSection() {
  return (
    <>
      <h2 className="mt-5 mb-4 fw-medium fs-3">Staj</h2>
      <Select label="1. Staj Tercihin" name="preference-first">
        {selectMap(preferences)}
      </Select>
      <Select label="2. Staj Tercihin" name="preference-second">
        {selectMap(preferences)}
      </Select>
      <Select label="3. Staj Tercihin" name="preference-third">
        {selectMap(preferences)}
      </Select>
    </>
  );
}
