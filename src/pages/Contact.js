import React from "react";
import ContactMapOverlay from "./contact/ContactMapOverlay";
import ContactFormSection from "./contact/ContactFormSection";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <ContactMapOverlay />
      <ContactFormSection />
    </div>
  );
}

export default Contact; 