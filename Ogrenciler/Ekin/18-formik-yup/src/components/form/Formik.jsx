import { Formik, Form } from "formik";

import Section from "#/form/Section";
import Checkbox from "#/atoms/Checkbox";
import Button from "#/atoms/Button";

export default function ({ children, ...props }) {
  return (
    <Formik {...props}>
      {({ isSubmitting }) => (
        <Form>
          {children}
          <Section>
            <Checkbox name="terms-and-conditions">
              <a href="#">Aydınlatma Metni</a>'ni okudum ve onaylıyorum.
            </Checkbox>
            <Checkbox name="kvkk">
              <a href="#">KVKK Metni</a>'ni okudum ve onaylıyorum.
            </Checkbox>
          </Section>
          <Button disabled={isSubmitting}>Başvur</Button>
        </Form>
      )}
    </Formik>
  );
}
