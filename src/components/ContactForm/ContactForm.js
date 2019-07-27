import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { camelCase } from 'lodash';
import Input from './input/Input';
import './contactform.scss';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Please enter your name.'),
    emailAddress: Yup.string().required('Please enter your email.'),
    message: Yup.string().required('Please enter your message.'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('handleSubmit', values);

    // TODO: do something with the message.

    setSubmitted(true);

    setSubmitting(false);
  };

  const fields = [
    { label: 'Full name' },
    { label: 'Email address' },
    { label: 'Message', type: 'textarea' },
  ];

  return (
    <div className="contact-form">
      {!submitted ? (
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          render={({
            values,
            handleSubmit,
            errors,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              {fields.map(field => {
                const id = camelCase(field.label);

                return (
                  <Input
                    key={id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={id}
                    name={id}
                    type={field.type}
                    defaultValue={values[id]}
                    placeholder={field.label}
                    error={errors[id]}
                  />
                );
              })}

              <button
                type="submit"
                className="contact-form__submit block-link block-link--chevron"
                disabled={isSubmitting}
              >
                Send it!
              </button>
            </form>
          )}
        />
      ) : (
        <p>
          Thank you for contacting me. I will aim to get back to you within 48
          hours.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
