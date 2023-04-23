import React from "react";
import "./contact.css";
import {MdOutlineMailOutline} from "react-icons/md"
import {AiOutlineMessage} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u29qxhr', 'template_bnfgczr', form.current, 'Xlt1Cvuls0Hm92Td5')
    e.target.reset()
    alert("message sent sucessfully")
      
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
     
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>yogimrmp@gmail</h5>
            <a href="mailto:yogimrmp@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
          <AiOutlineMessage  className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>yogimrmp@gmail</h5>
            <a href="mailto:yogimrmp@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>What's App</h4>
            <h5>+919019986732</h5>
            <a href="https:://api.whatsapp.com/send?+919019986732" target="_blank">Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your full name" required />
          <input type="text" name="email" placeholder="your Email" required />
           <textarea name="message"  rows="8" placeholder="your Email" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
