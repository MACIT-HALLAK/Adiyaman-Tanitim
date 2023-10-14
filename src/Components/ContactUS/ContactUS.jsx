import './ContactUS.css';
import React, { useEffect, useState, useTransition } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img from '../../Assets/images/itm2.png';
import img2 from '../../Assets/images/icons8-mail-50 (1).png';
import { useTranslation } from 'react-i18next';

const ContactUS = () => {
  const [typingText, setTypingText] = useState('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const { t } = useTranslation();
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

    // Validate Email
    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      e.preventDefault();
      return;
    }
  };

  return (
    <>
      <div className="contact-us">
        <div className="contact-form">
          <form
            action={`mailto:bilgiislem@adiyaman.bel.tr?subject=Contact Form Submission&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`}
            method="post"
            onSubmit={handleSubmit}
          >
            <p className="c-p">{typingText}</p>

            <input
              className="c-input1"
              placeholder={t('contact.inputs.name')}
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              className="c-input2"
              placeholder={t('contact.inputs.email')}
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              className="c-input3"
              placeholder={t('contact.inputs.subject')}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />

            <textarea
              className="c-text"
              name="message"
              cols={120}
              placeholder={t('contact.inputs.message')}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button type="submit" className="c-button">
              {t('contact.inputs.button')}
            </button>
          </form>
        </div>
        <div className="contact-img">
          <img className="c-img1" src={img} alt="contact_img" />
        </div>
      </div>
    </>
  );
};

export default ContactUS;
