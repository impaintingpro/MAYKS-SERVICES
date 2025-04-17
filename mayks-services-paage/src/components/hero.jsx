const Hero = () => {
  return (
    <section className="text-white py-5 hero" id="Hero">
      {/* Add video background here */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/img/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="text-start">
              <h1 className="hero-text fw-bold py-4 animate__animated animate__bounce">
                Your Home Deserves the Best Clean
              </h1>
              <p className="lead mb-4 fw-semibold">
                Professional cleaning services tailored to your needs.
                Whether it's your home, office, or apartment,
                we make sure it's sparkling clean!
              </p>
              <a className="btn button-1 text-white fw-semibold px-5 py-3" href="#ContactUS">
                Talk to Us
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block spraycontainer">
            {/* You can re-add splash or twinkle animations here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
