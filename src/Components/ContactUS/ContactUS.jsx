import './ContactUS.css';
import React, { useEffect, useState, useTransition } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img from '../../Assets/images/itm2.png';
import img2 from '../../Assets/images/icons8-mail-50 (1).png';
import { useTranslation } from 'react-i18next';

const ContactUS = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToType = t('contact.title');

  useEffect(() => {
    const delay = 150; // 0.5 seconds delay
    if (currentIndex < textToType.length) {
      const timer = setTimeout(() => {
        setTypedText(textToType.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, textToType]);

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

  useEffect(() => {
    setTimeout(() => {
      setErrors({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  }, [errors]);
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    // Reset errors
    setErrors({ name: '', email: '', message: '', subject: '' });

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

    // Validate Subject
    if (!formData.subject.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'subject is required',
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
      <div className="Contact-Us">
        <section>
          <div className='contact-head'>
            <p className="contact-p">
              {typedText}
            </p>
          </div>
          
            <img className="contact-img2" src={img2} alt="contact_img" />
            <img className="contact-img" src={img} alt="contact_img" />
          <div class="container-contact">
            <div class="wrap-contact">
              <form
                name="contact"
                class="contact-form validate-form"
                action={`mailto:bilgiislem@adiyaman.bel.tr?subject=${formData.subject}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`}
                method="post"
                onSubmit={handleSubmit}
              >
                <div class="wrap-input validate-input">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder={t('contact.inputs.name')}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                {errors.name && <div className="error">{errors.name}</div>}

                <div className="wrap-input validate-input">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder={t('contact.inputs.email')}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                {errors.email && <div className="error">{errors.email}</div>}

                <div className="wrap-input validate-input">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder={t('contact.inputs.subject')}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                {errors.subject && (
                  <div className="error">{errors.subject}</div>
                )}
                <div className="wrap-input validate-input">
                  <textarea
                    className="input"
                    type="text"
                    name="message"
                    rows={15}
                    cols={135}
                    placeholder={t('contact.inputs.message')}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                {errors.message && (
                  <div className="error">{errors.message}</div>
                )}

                <div className="container-contact-form-btn">
                  <button className="contact-form-btn" type="submit">
                    <span>{t('contact.inputs.button')}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className="contact-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUS;
