import AddittionalInfo from "../components/molecules/StepSections/AddittionalInfo";
import EducationInfo from "../components/molecules/StepSections/EducationInfo";
import ExperienceInfo from "../components/molecules/StepSections/ExperienceInfo";
import PersonalInfo from "../components/molecules/StepSections/PersonalInfo";
import SkillsInfo from "../components/molecules/StepSections/SkillsInfo";

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <EducationInfo />;

    case 2:
      return <ExperienceInfo />;
    case 3:
      return <SkillsInfo />;
    case 4:
      return <AddittionalInfo />;
    default:
      return "Unknown step";
  }
}
export default getStepContent;
