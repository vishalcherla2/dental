import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaChild,
  FaShieldAlt,
  FaClinicMedical
} from "react-icons/fa";

function Services() {

  const services = [
    
   
    {
      icon: <FaTooth />,
      title: "Root Canal Treatment"
    },
     {
      icon: <FaTooth />,
      title: "Teeth Cleaning & Scaling"
    },
    {
      icon: <FaTooth />,
      title: "Dental Fillings"
    },
    {
      icon: <FaTooth />,
      title: "Dental Implants"
    },
    {
      icon: <FaTeeth />,
      title: "Crowns & Bridges"
    },
    {
      icon: <FaSmile />,
      title: "Teeth Whitening"
    },
    {
      icon: <FaTeeth />,
      title: "Braces & Aligners"
    },
    {
      icon: <FaTooth />,
      title: "Wisdom Tooth Removal"
    },
    {
      icon: <FaChild />,
      title: "Pediatric Dentistry"
    },
    {
      icon: <FaShieldAlt />,
      title: "Gum Treatment"
    },
    {
      icon: <FaSmile />,
      title: "Smile Designing"
    }
  ];

  return (
    <section id="services" className="services-section">

      <div className="section-heading">
        <span>OUR SERVICES</span>
        <h2>Comprehensive Dental Care</h2>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;