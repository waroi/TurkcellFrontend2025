import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const AdayFormu = () => {
  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        coverLetter: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <Form
      onSubmit={handleSubmit}
      className="shadow w-75 p-5 rounded-5 bg-transparent"
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
      <Form.Group className="mb-3" controlId="coverLetter">
        <Form.Label>Ön Yazı:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="coverLetter"
          value={values.coverLetter}
          onChange={handleChange}
          className={
            errors.coverLetter ? "border-2 border-danger shadow-none" : ""
          }
          placeholder="Ön yazınızı max 200 karakter girerek yazınız..."
        />
        {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
            Kaydet
      </Button>
    </Form>
  );
};

export default AdayFormu;
