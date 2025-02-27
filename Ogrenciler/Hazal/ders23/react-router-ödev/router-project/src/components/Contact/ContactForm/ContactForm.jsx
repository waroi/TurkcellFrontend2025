const ContactForm = () => {
    return (
        <form className="col-lg-6 col-md-8 col-sm-12 mb-5 validation">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name"
                    placeholder="Enter your full name" />
                <div className="valid-feedback">Good!</div>
                <div className="invalid-feedback">Please enter a valid name.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                <div className="valid-feedback">Good!</div>
                <div className="invalid-feedback">Please enter a valid e-mail address.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select className="form-select" id="subject" name="subject">
                    <option value="">Choose an option..</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="General">General</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
                <div className="invalid-feedback">Please select an option.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <input type="text" className="form-control" id="message" name="message" row="10" required
                    minLength="10" placeholder="Enter your messsage here" />
                <div className="valid-feedback">Good!</div>
                <div className="invalid-feedback">Please enter a valid e-mail address.</div>
            </div>
            <div>
                <button className="btn btn-primary" type="submit">Send</button>
            </div>
        </form>
    );
};

export default ContactForm