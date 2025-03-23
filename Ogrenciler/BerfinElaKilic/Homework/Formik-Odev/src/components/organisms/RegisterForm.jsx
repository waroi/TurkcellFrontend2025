import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

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
    <Form
      onSubmit={handleSubmit}
      className="shadow w-100 p-5 rounded-5 bg-transparent"
    >
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>İsim: </Form.Label>
        <Form.Control
          type="text"
          placeholder="İsminizi Giriniz..."
          value={values.firstName}
          onChange={handleChange}
          name="firstName"
          className={
            errors.firstName ? "border-2 border-danger shadow-none" : ""
          }
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
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
            errors.lastName ? "border-2 border-danger shadow-none" : ""
          }
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="passwordConfirmation">
        <Form.Label>Şifre Tekrar: </Form.Label>
        <Form.Control
          type="password"
          placeholder="Şifrenizi Tekrar Giriniz..."
          value={values.passwordConfirmation}
          onChange={handleChange}
          name="passwordConfirmation"
          className={
            errors.passwordConfirmation
              ? "border-2 border-danger shadow-none"
              : ""
          }
        />
        {errors.passwordConfirmation && (
          <p className="error">{errors.passwordConfirmation}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Rol Seçin:</Form.Label>
        <Form.Select
          name="role"
          value={values.role}
          onChange={handleChange}
          className={errors.role ? "border-2 border-danger shadow-none" : ""}
        >
          {" "}
          <option value="">Sitemizi kullanım amacınızı seçiniz.</option>
          <option value="user">İş Arıyorum.</option>
          <option value="admin">İlan vereceğim.</option>
        </Form.Select>
        {errors.role && <p className="error">{errors.role}</p>}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Kaydet
      </Button>
    </Form>
  );
};

export default RegisterForm;
