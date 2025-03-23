import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log("submitting");
    console.log(values);
    console.log(actions);
    const { email, password, role } = values;

    const user = await login(email, password, role);

    if (user) {
      console.log(user);
      navigate("/jobs");
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        role: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <Form
      onSubmit={handleSubmit}
      className="shadow w-100 p-5 rounded-5 bg-transparent"
    >
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Mail Adresi: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Mail Adresinizi Giriniz..."
          value={values.email}
          onChange={handleChange}
          name="email"
          className={errors.email ? "border-2 border-danger shadow-none" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Şifre: </Form.Label>
        <Form.Control
          type="password"
          placeholder="Şifrenizi Giriniz..."
          value={values.password}
          onChange={handleChange}
          name="password"
          className={
            errors.password ? "border-2 border-danger shadow-none" : ""
          }
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Rol Seçin:</Form.Label>
        <Form.Select
          name="role"
          value={values.role}
          onChange={handleChange}
          className={errors.role ? "border-2 border-danger shadow-none" : ""}
        >
          <option value="">Rol Seçiniz</option>
          <option value="user">İş Arıyorum</option>
          <option value="admin">İlan veriyorum</option>
        </Form.Select>
        {errors.role && <p className="error">{errors.role}</p>}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Kaydet
      </Button>
    </Form>
  );
};

export default LoginForm;
