import Form from "react-bootstrap/Form";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { NavLink } from "react-router";

const LoginForm = () => {
  const { login, register, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/jobs");
    }
  }, [user]);

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
    <Form onSubmit={handleSubmit} className="w-75 p-5 bg-transparent">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Mail Adresi: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Mail Adresinizi Giriniz..."
          value={values.email}
          onChange={handleChange}
          name="email"
          className={errors.email ? "error-input rounded-pill" : "rounded-pill"}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
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
            errors.password ? "error-input rounded-pill" : "rounded-pill"
          }
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Rol Seçin:</Form.Label>
        <Form.Select
          name="role"
          value={values.role}
          onChange={handleChange}
          className={errors.role ? "error-input rounded-pill" : "rounded-pill"}
        >
          <option value="">Rol Seçiniz</option>
          <option value="user">İş Arıyorum</option>
          <option value="admin">İlan veriyorum</option>
        </Form.Select>
        {errors.role && <p className="error-message">{errors.role}</p>}
      </Form.Group>

      <div className="d-flex gap-4 align-items-center">
        <PrimaryButton className="px-5" type="submit" disabled={isSubmitting}>
          Giriş yap
        </PrimaryButton>
        <NavLink to="/register" className="ms-2">
          {" "}
          Kayıtlı değil misin? Üye ol.
        </NavLink>
      </div>
    </Form>
  );
};

export default LoginForm;
