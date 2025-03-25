import { Tab, Pane } from "../components/Tabs";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <>
      <div className="container">
        <Tab>
          <Pane id="sign-in" tab="Giriş Yap">
            <SignIn />
          </Pane>
          <Pane id="sign-up" tab="Üye Ol">
            <SignUp />
          </Pane>
        </Tab>
      </div>
    </>
  );
}
