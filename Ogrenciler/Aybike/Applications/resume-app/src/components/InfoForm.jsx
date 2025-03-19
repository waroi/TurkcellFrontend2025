import React from 'react'
import { Form, Formik } from "formik";
import { formSchema } from '../schemas/formSchema';

const InfoForm = () => {

  const onSubmit = async(values, actions) => {
    actions.resetForm();
  }


  return (
    <>
      <div>Lütfen başvuru için gerekli bilgileri doldurunuz.</div>
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

            {
            ({isSubmitting})=>(
            
            <Form>
            <input type="text" label="İsminiz" name="firstName" />
            <input type="text" label="Soyisminiz" name="lastName" />
            <input type="text" label="mail adresi " name="email" />
            <input type="text" label="ülke" name="country" />
            <input type="text" label="şehir" name="city" />
            <input type="text" label="üniversite" name="university" />
            <label htmlFor="mezun" > Mezun oldum</label>
            <input type="checkbox" id="mezun" value="Mezun"/>
            <input type="date" label="mezuniyet yılı" name="graduationYear" />
            <input type="text" label="departman" name="department" />

            <input type="number" label="GANO" name="gpa" />
            <button disabled={isSubmitting} type="submit">
              Gönder
            </button>
            </Form>
           )} 
    </Formik>
  
    </>
  )
}

export default InfoForm