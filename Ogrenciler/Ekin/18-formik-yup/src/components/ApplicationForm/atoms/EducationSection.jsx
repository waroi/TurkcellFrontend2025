import React from "react";
import Select from "../inputs/Select";
import selectMap from "../../util/selectMap";
import { universities, majors, grades } from "../../schemas/application";

export default function EducationSection() {
  return (
    <>
      <h2 className="mt-5 mb-4 fw-medium fs-3">Eğitim</h2>
      <Select label="Üniversite" name="university">
        {selectMap(universities)}
      </Select>
      <Select label="Bölüm" name="major">
        {selectMap(majors)}
      </Select>
      <Select label="Sınıf" name="grade">
        {selectMap(grades)}
      </Select>
    </>
  );
}
