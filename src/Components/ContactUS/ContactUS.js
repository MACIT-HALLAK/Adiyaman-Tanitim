import './ContactUS.css';
import React, { useEffect, useState, useTransition } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img from '../../Assets/images/itm2.png';
import img2 from '../../Assets/images/icons8-mail-50 (1).png';
import { useTranslation } from 'react-i18next';

const ContactUS = () => {
  const { t } = useTranslation();
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
          <div>
            <p className="contact-p">
              {t('contact.title')}
              <img className="contact-img2" src={img2} alt="contact_img" />
            </p>
            <img className="contact-img" src={img} alt="contact_img" />
          </div>
          <div class="container-contact">
            <div class="wrap-contact">
              <form
                name="contact"
                class="contact-form validate-form"
                action={`mailto:asas.ak390@gmail.com?subject=${formData.subject}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`}
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
                {errors.name && <div>{errors.name}</div>}

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
                {errors.email && <div>{errors.email}</div>}

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
                {errors.subject && <div>{errors.subject}</div>}
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
                {errors.message && <div>{errors.message}</div>}

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