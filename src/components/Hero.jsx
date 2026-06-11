function Hero() {

  const handleBookAppointment = () => {
    document
      .getElementById("contact")
      .scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          Welcome To Durge Dental Hospital
        </span>

        <h1>
          PATIENT SATISFACTION IS OUR FIRST PRIORITY
        </h1>

       <p>
  Recognized for quality dental care in Mancherial, Durge
  Dental Hospital combines modern technology, experienced
  specialists, and patient-focused treatment to create
  healthy, confident smiles for every family.
</p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>

          <a
            href="tel:+919703731234"
            className="secondary-btn"
          >
            Call Now
          </a>

        </div>

      </div>

      <div className="hero-image">
        <img
          src="/images/apple-smile.jpeg"
          alt="Dental Clinic"
        />
      </div>

    </section>
  );
}

export default Hero;