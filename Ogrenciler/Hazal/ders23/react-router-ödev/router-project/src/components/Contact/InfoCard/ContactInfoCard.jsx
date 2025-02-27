const ContactInfoCard = ({ icon, title, content }) => {
    return (
        <div className="info-card mb-3">
            <div className="contact-icon d-flex ms-auto me-auto mb-2">
                <a className="ms-auto me-auto" href="#">
                    <span className="text-white">Q</span>
                </a>
            </div>
            <h4 className="card-title text-center mb-3">{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default ContactInfoCard