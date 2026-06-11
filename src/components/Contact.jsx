import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    treatment: "",
    date: "",
    description: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Durge Dental Hospital,

I would like to book an appointment.

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

🎂 Age: ${formData.age}

🦷 Treatment: ${formData.treatment}

📅 Preferred Date: ${formData.date}

📝 Problem Description:
${formData.description}
`;

    const whatsappUrl =
      `https://wa.me/919705124929?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      age: "",
      treatment: "",
      date: "",
      description: ""
    });
  };

  return (
    <section id="contact" className="contact-section">

      <div className="section-heading">
        <span>CONTACT US</span>
        <h2>Book Your Appointment</h2>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Treatment
          </option>

          <option>Dental Checkup</option>
          <option>Teeth Cleaning & Scaling</option>
          <option>Root Canal Treatment</option>
          <option>Dental Fillings</option>
          <option>Dental Implants</option>
          <option>Teeth Whitening</option>
          <option>Braces & Aligners</option>
          <option>Wisdom Tooth Removal</option>
          <option>Pediatric Dentistry</option>
          <option>Gum Treatment</option>
          <option>Smile Designing</option>
          <option>Emergency Dental Care</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <textarea
          rows="6"
          placeholder="Describe Your Problem"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="submit-btn"
        >
          Book Appointment On WhatsApp
        </button>

      </form>

      {success && (
        <div className="success-popup">

          <div className="popup-content">

            <h2>Appointment Request Submitted</h2>

            <p>
              Thank you for choosing
              Durge Dental Hospital.
              Our team will contact you shortly.
            </p>

            <button
              onClick={() => setSuccess(false)}
            >
              Close
            </button>

          </div>

        </div>
      )}
      <div className="contact-footer">
  <p>
    © 2026 Durge Dental Hospital. All Rights Reserved.
  </p>
</div>

    </section>
  );
}

export default Contact;