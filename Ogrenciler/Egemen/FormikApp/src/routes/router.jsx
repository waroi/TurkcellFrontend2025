import { useRoutes } from "react-router";
import GeneralFormView from "../views/GeneralFormView";
import ApplicationsView from "../views/ApplicationsView";
import SignInView from "../views/SignInView";
import Quiz from "../components/organisms/quiz/Quiz";
import TestResult from "../components/organisms/infoScreens/testCompleted";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <SignInView /> },
    { path: "/form", element: <GeneralFormView /> },
    { path: "/applications", element: <ApplicationsView /> },
    { path: "/quiz/:id", element: <Quiz /> },
    { path: "/quizCompleted", element: <TestResult /> },
  ]);
  return routes;
};

export default Router;
