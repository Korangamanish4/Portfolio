import React, {useRef} from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

   const formData = useRef()

   const sendMail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_2ybbtwk', 'template_a69ps6a', formData.current, '38WLPG68JCbQUKsb5')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(err) {
      console.log('FAILED...', err);
   });
   }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>korangamanish4@gmail.com</h5>
            <a href="mailto:korangamanish4@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Maneesh Koranga</h5>
            <a href="https://m.me/manish.koranga.75" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whats App</h4>
            <h5>+91 7500843108</h5>
            <a href="https://api.whatsapp.com/send?phone=7500843108" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={formData} onSubmit={sendMail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
