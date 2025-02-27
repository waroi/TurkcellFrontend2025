import { useEffect, useState } from "react";
import AboutCard from "./Card/AboutCard";
import { aboutData } from "../../data/about";

const About = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        setAbout(aboutData)
    }, [])
    return (
        <section id="about" className="about-us p-5">
            <div className="container">
                <h2 className="about-title text-center mt-4 mb-4 text-white">ABOUT US</h2>
                <p className="text-center mb-5 text-white px-3">
                    At HoloWorld, we're redefining reality and transforming how you
                    interact with the world around you. Our platform is a futuristic marketplace that combines cutting-edge
                    holographic technology with creativity, innovation, and personalization.
                </p>
                <div className="about-cards row d-flex">
                    {about.map(item => (
                        <AboutCard
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

export default About