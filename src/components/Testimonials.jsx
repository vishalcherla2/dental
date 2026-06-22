function Testimonials() {

  const testimonials = [
    {
      before: "/images/before1.jpeg",
      after: "/images/after1.jpeg",
    },
    {
      before: "/images/before2.jpeg",
      after: "/images/after2.jpeg",
    },
    {
      before: "/images/before3.jpeg",
      after: "/images/after3.jpeg",
    },
    {
      before: "/images/before4.jpeg",
      after: "/images/after4.jpeg",
    },
    {
      before: "/images/before5.jpeg",
      after: "/images/after5.jpeg",
    },
    {
      before: "/images/before6.jpeg",
      after: "/images/after6.jpeg",
    },
    {
      before: "/images/before7.jpeg",
      after: "/images/after7.jpeg",
    },
    {
      before: "/images/before8.jpeg",
      after: "/images/after8.jpeg",
    },
    {
      before: "/images/before9.jpeg",
      after: "/images/after9.jpeg",
    }
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >

      <div className="section-heading">
        <span>PATIENT TESTIMONIALS</span>
        <h2>Smile Transformations</h2>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <div
            className="testimonial-card"
            key={index}
          >

           <div className="before-after">

  <img
    src={item.before}
    alt="Before"
    className="transformation-image"
  />

  <img
    src={item.after}
    alt="After"
    className="transformation-image"
  />

</div>

<div className="labels">
  <span>BEFORE</span>
  <span>AFTER</span>
</div>

            <div className="testimonial-content">

              <h3>{item.name}</h3>

              <p>{item.treatment}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;