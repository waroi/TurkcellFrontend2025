import ContactForm from "@/components/organisms/ContactForm";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
