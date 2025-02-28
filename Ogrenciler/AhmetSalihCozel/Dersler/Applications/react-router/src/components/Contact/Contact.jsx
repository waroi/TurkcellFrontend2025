import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./InfoCard/ContactInfoCard";
import { contactInfoData } from "../../data/contact";

const Contact = () => {
    const [contact, setContact] = useState([])
    useEffect(() => {
        setContact(contactInfoData)
    }, [])
    return (
        <section id="contact" className="contact p-5">
            <div className="container">
                <h2 className="contact-title mt-5 mb-5 text-center">CONTACT US</h2>
                <div className="contact row">
                    <ContactForm />
                    <div className="col-lg-5 col-md-8 col-sm-12 ms-3 mb-5 info-cards">
                        {contact.map(info => (
                            <ContactInfoCard
                                key={info.id}
                                icon={info.icon}
                                title={info.title}
                                content={info.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact