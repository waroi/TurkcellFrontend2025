import { Form, Formik } from "formik";
import { formSchema } from '../schemas/formSchema';
import CustomInput from './CustomInput';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    console.log(values)
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
}

const InfoForm = () => {

  return (
    <>
    <div className="container">
    <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          country: '',
          city: '',
          university: '',
          graduationStatus: false,
          graduationYear: '',
          department: '',
          gpa: ''
        }}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >

        {({ isSubmitting }) => (

          <Form className="d-flex flex-column">
            <CustomInput
              label="Kullancı Adı"
              name="firstName"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />

            <CustomInput type="text" label="Soyisminiz" name="lastName" />
            <CustomInput type="email" label="Mail Adresiniz" name="email" />

            {/* Custom Select yapılacak inş */}
            <CustomInput type="text" label="Ülke Adresiniz" name="country" />
            <CustomInput type="text" label="Şehir Adresiniz" name="city" />
            <CustomInput type="text" label="Üniversite Adresiniz" name="university" />
            {/* Custom Select yapılacak inş */}

            <label htmlFor="mezun" > Mezun oldum</label>
            <input type="checkbox" id="mezun" value="Mezun" />
            {/*   <input type="date" label="mezuniyet yılı" name="graduationYear" />
            <input type="text" label="departman" name="department" />

            <input type="number" label="GANO" name="gpa" />*/}
            <button disabled={isSubmitting} type="submit">
              Gönder
            </button>
          </Form>
        )}
      </Formik >
      </div>
    </>
  )
}

export default InfoForm