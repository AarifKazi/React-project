import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Components/Footer";
import axios from "axios";

export default function Contact() {
  const [form,setform] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  const handlechange=(e)=>{
    setform({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const senddata=async(e)=>{
    e.preventDefault()
     await axios.post('http://localhost:3000/Message',form)
     alert('Message Sent Successfully')

     setform({
      name:'',
      email:'',
      subject:'',
      message:''
     })
  }
  return (
    <div className="contact">

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Aurex</h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out anytime</p>

            <div className="info-box">
              <h4>📧 Email</h4>
              <p>support@aurex.com</p>
            </div>

            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 9876543210</p>
            </div>

            <div className="info-box">
              <h4>📍 Location</h4>
              <p>Surat, Gujarat</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-box">
            <h2>Send Message</h2>

            <form className="contact-form" onSubmit={senddata}>
              <input type="text" placeholder="Your Name" name="name" onChange={handlechange} value={form.className} />
              <input type="email" placeholder="Your Email" name="email" onChange={handlechange} value={form.email}/>
              <input type="text" placeholder="Subject" name="subject" onChange={handlechange} value={form.subject}/>
              <textarea placeholder="Your Message" name="message" onChange={handlechange} value={form.message}></textarea>
              <button>Send Message</button>
            </form>
          </div>

        </div>
      </section>

    <Footer/>
    </div>
  );
}