import React, { useState } from "react";
import "./ContactFormSection.css";

const info = [
  { label: "Address:", value: "Bắc Ninh City" },
  { label: "Phone:", value: "+84354 240 237" },
  { label: "E-mail:", value: "ngochien1234567892005@gmail.com" },
  { label: "Website:", value: "Billiardss.pro" },
];

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contactform-section">
      <h2 className="contactform-title">CONTACT</h2>
      <div className="contactform-row">
        <div className="contactform-info">
          {info.map((item, i) => (
            <div className="contactform-info-row" key={i}>
              <span className="contactform-info-label">{item.label}</span>
              <span className="contactform-info-value">{item.value}</span>
            </div>
          ))}
        </div>
        <form className="contactform-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            className="contactform-input"
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            required
          />
          <div className="contactform-row-2">
            <input
              className="contactform-input"
              type="email"
              name="email"
              placeholder="E-mail*"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="contactform-input"
              type="text"
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="contactform-textarea"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="contactform-submit" type="submit">
            <span className="contactform-submit-icon">➤</span> SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection; 