import { Tab, Pane } from "#/Tabs";
import SignIn from "#/SignIn";
import SignUp from "#/SignUp";

export default function Auth() {
  return (
    <div className="container">
      <Tab>
        <Pane id="sign-in" tab="Sign In">
          <SignIn />
        </Pane>
        <Pane id="sign-up" tab="Sign Up">
          <SignUp />
        </Pane>
      </Tab>
    </div>
  );
}
