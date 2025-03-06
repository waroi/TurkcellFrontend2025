import { signInWithGoogle } from "../../../firebase/authControl";

const SignIn = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Giriş</button>
    </div>
  );
};

export default SignIn;
