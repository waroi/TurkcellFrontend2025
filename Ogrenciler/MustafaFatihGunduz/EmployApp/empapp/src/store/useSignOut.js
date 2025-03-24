import { auth } from "../../firebase_config";
import { signOutFromApp } from "../services/auth_service";

const useSignOut = () => {
    const handleSignOut = async () => {
        await signOutFromApp();
        if (auth.currentUser === null) {
          alert("Oturumu kapattınız");
        } else {
          alert("Oturum kapatılamadı");
        }
      };

      return {handleSignOut};
}

export default useSignOut