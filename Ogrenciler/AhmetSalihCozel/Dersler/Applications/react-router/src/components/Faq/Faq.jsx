import { useEffect, useState } from "react";
import FaqCard from "./Card/FaqCard";
import { faqData } from "../../data/faq";

const Faq = () => {
    const [faq, setFaq] = useState([])
    useEffect(() => {
        setFaq(faqData)
    }, [])
    return (
        <section id="faq" className="faq p-5">
            <div className="container">
                <h2 className="faq-title text-center mt-5 mb-5">Frequently Asked Questions</h2>
                <div className="faq-cards row d-flex">
                    {faq.map(item => (
                        <FaqCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq