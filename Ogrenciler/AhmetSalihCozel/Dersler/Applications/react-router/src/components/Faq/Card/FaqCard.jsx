const FaqCard = ({ title, description }) => {
    return (
        <div className="col-lg-4 col-md-8 col-sm-12 mb-5">
            <div className="faq-card h-100">
                <h4 className="card-title text-center mb-3 text-white">{title}</h4>
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
};

export default FaqCard