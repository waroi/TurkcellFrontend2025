import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
/*
1-auth component yapılacak
2-kullanıcı adı ve şifre girilecek gönderilecek
3-tek component olacak password, email hem login-hem signup aynı component
4-önce kayıt olcak , tekrar bu ekrandayız, 
5-tekrar login
6-

*/
const AuthView = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100   ">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
