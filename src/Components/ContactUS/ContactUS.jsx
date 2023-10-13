import './ContactUS.css';
import React, { useEffect, useState, useTransition } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img from '../../Assets/images/itm2.png';
import img2 from '../../Assets/images/icons8-mail-50 (1).png';

const ContactUS = () => {
  const [typingText, setTypingText] = useState('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  // Text to be typed
  const textToType = 'Bize Ulaşın';

  useEffect(() => {
    if (currentCharacterIndex < textToType.length) {
      const timeoutId = setTimeout(() => {
        setTypingText(textToType.substring(0, currentCharacterIndex + 1));
        setCurrentCharacterIndex(currentCharacterIndex + 1);
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [currentCharacterIndex, textToType]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
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
    if (!formData.subject.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: 'subject is required',
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
    <>
      <Navbar />
      <div className="contact-us">
        <div className="contact-form">
          <form
            action={`mailto:mahmmmoud144@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`}
            method="post"
            onSubmit={handleSubmit}
          >
            <p className="c-p">{typingText}</p>
            {/* <img className="c-img" src={img2} /> */}

            <input
              className="c-input1"
              placeholder="Ad-Soyad"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <div>{errors.name}</div>}
            <input
              className="c-input2"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <div>{errors.email}</div>}
            <input
              className="c-input3"
              placeholder="Konu Başlığı"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
            {errors.subject && <div>{errors.subject}</div>}
            <textarea
              className="c-text"
              placeholder="Mesaj"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {errors.message && <div>{errors.message}</div>}
            <button type="submit" className="c-button">
              Send
            </button>
          </form>
        </div>
        <div className="contact-img">
          <img className="c-img1" src={img} alt="contact_img" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUS;
