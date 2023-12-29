import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.scss"
const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cnjrihq', 'template_dyc6w7m', form.current, '8c3Sgn1ib4YDJWhCF')
          .then((result) => {
              alert("Email sent Successfully!")
              form.current.reset()
          }, (error) => {
              console.log(error.text);
          });
      };

    
    return (
        <div className='contact-us container'>
            <h1 className="heading">
                Let's talk <br /> About Your Projects!
            </h1>

            <div className='form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <div >
                        <label htmlFor="name">First Name</label>
                        <input type="text" name="to_name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="from_name" id="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type='submit' className='center'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
