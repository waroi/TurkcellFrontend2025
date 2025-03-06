import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router";


/*
1-auth component yapılacak
2-kullanıcı adı ve şifre girilecek gönderilecek
3-tek component olacak password, email hem login-hem signup aynı component
4-önce kayıt olcak , tekrar bu ekrandayız, 
5-tekrar login
6-
*/
const AuthView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  let methods = [];
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (password && email) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setEmail("");
          setPassword("");
          navigation("/app");
        })
    }
    console.log("submitting");

  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password && email) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setEmail("");
          setPassword("");
          navigation("/app");
        })

    }

  };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         methods  = await fetchSignInMethodsForEmail(auth, email);
       
        if (methods.length > 0) {
          handleSignIn(e);
          console.log("✅ Giriş başarılı!");
        } else {
          handleSignUp(e);
          console.log("✅ Kayıt başarılı!");
        }
      } catch (error) {
        console.error("❌ Hata:", error.message);
      }
      console.log("submitting");
      console.log(methods);
    }
    

 

  return (
    <div className="d-flex align-items-center justify-content-center vh-100   ">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthView;
