import './ContactUS.css';
import React, { useEffect,useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import img from '../../Assets/images/itm2.png';
import img2 from '../../Assets/images/icons8-mail-50 (1).png';


const ContactUS = () => {

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
    <div className='Contact-Us'>
        <div className='contact-nav'>
        <Navbar/>
        </div>
        
            <section>
            <p className='contact-p'>Bize Ulaşın
            <img className='contact-img2' src={img2}/>

            </p>
            <img className='contact-img' src={img}/>


            <div class="container-contact">
                <div class="wrap-contact">

                <form name="contact" class="contact-form validate-form"
                action={`mailto:mahmmmoud144@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`}
                method="post"
                onSubmit={handleSubmit}
                >

                    <div class="wrap-input validate-input">
                    <input class="input" 
                    type="text" 
                    name="name" 
                    placeholder="Ad-Soyad"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    </div>
                    {errors.name && <div>{errors.name}</div>}

                    <div class="wrap-input validate-input">
                    <input 
                    class="input" 
                    type="text" 
                    name="email" 
                    placeholder="E-posta"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    </div>
                    {errors.email && <div>{errors.email}</div>}

                    <div class="wrap-input validate-input">
                    <input 
                    class="input" 
                    type="text" 
                    name="email" 
                    placeholder="Konu Başlığı"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                    </div>
                    {errors.subject && <div>{errors.subject}</div>}
                    <div class="wrap-input validate-input">
                    <textarea 
                    class="input" 
                    type="text" 
                    name="message" 
                    placeholder="Mesaj"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    >
                    </textarea>
                    </div>
                    {errors.message && <div>{errors.message}</div>}

                    <div class="container-contact-form-btn">
                    <button class="contact-form-btn" type="submit">
                        <span>Send</span>
                    </button>
                    </div>

                </form>

                </div>
            </div>


            </section>


        <div className='contact-footer'>
        <Footer/>
        </div>
    </div>
    </>
);
};

export default ContactUS;
