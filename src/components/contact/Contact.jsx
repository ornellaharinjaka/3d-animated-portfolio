import "./contact.css";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactSvg from "./ContactSvg";
import { motion, useInView } from "motion/react";
import { animate } from "motion";

const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const form = useRef();
  const isInView = useInView(form, {margin: "-200px"});

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        () => {
          setError(true);
          setSuccess(true);
        },
      );
  };

  return (
    <div className="contact" ref={form} onSubmit={sendEmail} >
      <div className="cSection">
        <motion.form variants={listVariants} animate={ isInView ? "animate" : "initial" }>
          <motion.h1 variants={listVariants} className="cTitle">Let&apos;s keep in touch</motion.h1>
          <motion.div variants={listVariants} className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="John Doe"/>
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="john@gmail.com"/>
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Message</label>
            <textarea rows={10} name="user_message" placeholder="Write your message..."></textarea>
          </motion.div>
          <motion.button variants={listVariants} className="formButton">Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg/>
      </div>
    </div>
  )
}

export default Contact
