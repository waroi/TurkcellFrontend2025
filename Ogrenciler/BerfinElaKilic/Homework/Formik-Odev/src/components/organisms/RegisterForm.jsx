import Form from "react-bootstrap/Form";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";

const RegisterForm = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    const { email, password, firstName, lastName, role } = values;
    const user = await register(email, password, firstName, lastName, role);

    if (user) {
      console.log("user from database", user);
      navigate("/login");
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        role: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  return (
    <Form onSubmit={handleSubmit} className="w-100 p-5 bg-transparent">
      <h1>Kaydol</h1>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>İsim: </Form.Label>
        <Form.Control
          type="text"
          placeholder="İsminizi Giriniz..."
          value={values.firstName}
          onChange={handleChange}
          name="firstName"
          className={
            errors.firstName
              ? "error-input shadow-none rounded-pill"
              : "rounded-pill"
          }
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Soyisim: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Soyisminizi Giriniz..."
          value={values.lastName}
          onChange={handleChange}
          name="lastName"
          className={
            errors.lastName
              ? "error-input shadow-none rounded-pill"
              : "rounded-pill"
          }
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Mail Adresi: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Mail Adresinizi Giriniz..."
          value={values.email}
          onChange={handleChange}
          name="email"
          className={
            errors.email
              ? "error-input shadow-none rounded-pill"
              : "rounded-pill"
          }
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
            errors.password
              ? "error-input shadow-none rounded-pill"
              : "rounded-pill"
          }
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="passwordConfirmation">
        <Form.Label>Şifre Tekrar: </Form.Label>
        <Form.Control
          type="password"
          placeholder="Şifrenizi Tekrar Giriniz..."
          value={values.passwordConfirmation}
          onChange={handleChange}
          name="passwordConfirmation"
          className={
            errors.passwordConfirmation ? "error-input shadow-none" : ""
          }
        />
        {errors.passwordConfirmation && (
          <p className="error-message">{errors.passwordConfirmation}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Rol Seçin:</Form.Label>
        <Form.Select
          name="role"
          value={values.role}
          onChange={handleChange}
          className={
            errors.role
              ? "error-input shadow-none rounded-pill"
              : "rounded-pill"
          }
        >
          {" "}
          <option value="">Sitemizi kullanım amacınızı seçiniz.</option>
          <option value="user">İş Arıyorum.</option>
          <option value="admin">İlan vereceğim.</option>
        </Form.Select>
        {errors.role && <p className="error-message">{errors.role}</p>}
      </Form.Group>

      <div className="d-flex gap-4 align-items-center">
        <PrimaryButton className="px-5" type="submit" disabled={isSubmitting}>
          Kaydet
        </PrimaryButton>
        <NavLink to="/login" className="ms-2">
          {" "}
          Zaten üye misin? Giriş yap.
        </NavLink>
      </div>
    </Form>
  );
};

export default RegisterForm;
