/*import Recaptcha from "../components/Recaptcha.jsx";
import { useState } from "react";*/


function ContactContent(){
    //TO-DO: Add Recaptcha
    // const [token, setToken] = useState("");
    // const handleToken = (token) => {
    //https://www.youtube.com/watch?v=_JnaVeXIYEc&ab_channel=CodeRadiance
    // }

    return (
        <>
            <div className="contact-content">
                <div className="contact-container">
                    <div className="contact-left">
                    <h2>I'd Love to Hear <br/>From You!</h2>
                        <p>
                            Questions? Comments? Concerns? I&#39;m here for all of it! I will do my best 
                            to respond within a week. I&#39;m not a social media kind of guy, but you can 
                            reach me via the message form or you can shoot me an email at the following
                            address: <br/><br/><br/>
                            <div className="email-box">
                                <span className="box-text">wellthunk@yturaldi.com</span>
                            </div>
                        </p>
                    </div>
                    <div className="contact-right">
                        <form>
                            <label>Your Name</label>
                            <input placeholder="Saul Goodman" type="text" required/>
                            <label>Your Email</label>
                            <input placeholder="email@example.com" type="email"/>
                            <label>Message</label>
                            <textarea placeholder="Enter your message here..." rows="8" required></textarea>
                            <button>Submit</button>
                            {/*<Recaptcha sitekey="6LexufwpAAAAAKgcznsNOTbDNV8YcN2coAFY-OkV" secretkey="6LexufwpAAAAAL7rYHYAoqql_D8HbLyho4ChPgKL"/>*/}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactContent;