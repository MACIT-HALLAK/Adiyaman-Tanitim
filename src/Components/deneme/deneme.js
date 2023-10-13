import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    // Reset errors
    setErrors({ name: '', email: '', message: '' });

    // Validate Name
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      e.preventDefault();
      return;
    }

    // Validate Email
    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      e.preventDefault();
      return;
    }

    // Validate Message
    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required',
      }));
      e.preventDefault();
      return;
    }
  };

  return (
    <form
      action={`mailto:bilgiislem@adiyaman.bel.tr?subject=Contact Form Submission&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`}
      method="post"
      onSubmit={handleSubmit}
    >
      Name:
      <br />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <div>{errors.name}</div>}
      <br />
      Email:
      <br />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <div>{errors.email}</div>}
      <br />
      Message:
      <br />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      {errors.message && <div>{errors.message}</div>}
      <br />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;