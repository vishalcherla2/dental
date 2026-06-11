function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-left">
        <img
          src="/images/chair-image.jpeg"
          alt="Dental Clinic"
        />
      </div>

      <div className="about-right">

        <span className="section-subtitle">
          ABOUT DURGE DENTAL
        </span>

        <h2>
          Providing Exceptional Dental Care
          For Every Smile
        </h2>

        <p>
          At Durge Dental Hospital, we are committed to
          delivering world-class dental treatments using
          advanced technology and patient-centered care.
        </p>

        <p>
          Our experienced team provides preventive,
          restorative and cosmetic dentistry services
          to help patients achieve healthy and confident
          smiles.
        </p>

        <div className="about-stats">

          <div className="stat-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>5000+</h3>
            <p>Happy Patients</p>
          </div>

          <div className="stat-card">
            <h3>12+</h3>
            <p>Dental Services</p>
          </div>

        </div>

        

      </div>

    </section>
  );
}

export default About;