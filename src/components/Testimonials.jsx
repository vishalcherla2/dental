function Testimonials() {

  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4"
  ];

  return (
    <section id="testimonials" className="testimonials-section">

      <div className="section-heading">
        <span>PATIENT TESTIMONIALS</span>
        <h2>What Our Patients Say</h2>
      </div>

      <div className="testimonial-grid">

        {videos.map((video, index) => (
          <div className="testimonial-card" key={index}>

            <video
              controls
              preload="metadata"
              className="testimonial-video"
            >
              <source src={video} type="video/mp4" />
            </video>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;