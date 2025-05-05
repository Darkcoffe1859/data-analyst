import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            {/* Left Section */}
            <div className="contact-left">
                <h1>Get in Touch</h1>
                <h2>I’d love to hear from you!</h2>
                <p>
                    Whether you have a question, want to collaborate, or just want to say hi —
                    feel free to reach out. I’ll do my best to get back to you as soon as possible.
                </p>

                <div className="contact-info">
                    <p><strong>Email:</strong> estherebebe96@gmail.com</p>
                    <p><strong>Phone:</strong> +2348101057862</p>
                    <p><strong>Location:</strong> Abuja, Nigeria</p>
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="contact-right">
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your Message"></textarea>

                    <button type="submit" className="contact-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
