function Doctors() {

  const doctors = [
    {
      image: "/images/doctor1.jpeg",
      name: "Dr. Shravan Durge",
      qualification: "BDS",
      specialization: "Cosmetic Dental Surgeon"
    },
    {
      image: "/images/doctor2.jpeg",
      name: "Dr. pankaj",
      qualification: "MDS",
      specialization: "Endodontist"
    },
    {
      image: "/images/doctor2.jpeg",
      name: "Dr. Harish",
      qualification: "MDS",
      specialization: "Prosthodontist"
    },
    {
      image: "/images/doctor2.jpeg",
      name: "Dr. Nishanth",
      qualification: "MDS",
      specialization: "Oral Maxilo Facial Surgoen"
    }
  ];

  return (
    <section id="doctors" className="doctors-section">

      <div className="section-heading">
        <span>OUR DOCTORS</span>
        <h2>Meet Our Specialists</h2>
      </div>

      <div className="doctors-grid">

        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>

            <div className="doctor-image">
              <img
                src={doctor.image}
                alt={doctor.name}
              />
            </div>

            <div className="doctor-content">

              <h3>{doctor.name}</h3>

              <p className="qualification">
                {doctor.qualification}
              </p>

              <p className="specialization">
                {doctor.specialization}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Doctors;