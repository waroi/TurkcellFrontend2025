import { api } from "./api";

export const fetchTestResults = () => {
  return api.testResults.fetch();
};
