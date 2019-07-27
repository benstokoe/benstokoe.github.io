import React from 'react';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import './contact.scss';

const Contact = () => (
  <div className="contact" id="contact">
    <Container>
      <h2>Contact Me</h2>
      <p>
        Please feel free to contact me below to talk about a project or work
        you'd like done.
      </p>

      <ContactForm />
    </Container>
  </div>
);

export default Contact;
