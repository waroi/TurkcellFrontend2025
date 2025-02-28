const AboutCard = ({ title, description }) => {
    return (
        <div className="col-lg-4 col-md-8 col-sm-12 mb-5">
            <div className="about-card h-100">
                <h4 className="card-title text-center mb-3">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AboutCard