function ContactContent(){
    return (
        <>
            <div className="contact-content">
                <h2>I'd Love to Hear From You!</h2>
                <div>
                    <p>
                        Questions? Comments? Concerns? I&#39;m here for all of it! I will do my best 
                        to respond within a week. I&#39;m not a social media kind of guy, but you can 
                        reach me via the form below or you can shoot me an email at <span className="box-text">wellthunk@yturaldi.com</span>
                    </p>
                    <form>
                        <label>Your Name</label>
                        <input placeholder="Saul Goodman" type="text" required/>
                        <label>Your Email</label>
                        <input placeholder="email@example.com" type="email"/>
                        <label>Message</label>
                        <textarea placeholder="Enter your message here..." rows="10" required></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactContent;