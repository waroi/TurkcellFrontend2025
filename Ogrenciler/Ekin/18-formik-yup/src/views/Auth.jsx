import { Tab, Pane } from "#/atoms/Tab";
import SignIn from "#/auth/SignIn";
import SignUp from "#/auth/SignUp";

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
