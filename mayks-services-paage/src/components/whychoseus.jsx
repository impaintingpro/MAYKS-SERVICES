const WhyChoseUs = () => {
    
    return (
        <section className="whychoseus">
            <div className="container wcu-spacing">
                <h1 className="text-center m-0">Why Choose Us</h1>
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {[...Array(2)].map((_, index) => (
                            <div className="carousel-items" key={index}>
                                <div className="card-item">
                                    <div className="position-relative d-flex justify-content-center my-5 text-center">
                                        <div className="square-image">
                                            <img
                                                src="img/unsplash_3hO8igCybds.png"
                                                alt="Reliable service"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="rectangle bg-white text-black fw-bold d-flex justify-content-center align-items-center text-center">
                                            <p className="px-4 py-2 m-0">
                                                Reliable and<br />professional service
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="position-relative d-flex justify-content-center my-5 text-center">
                                        <div className="square-image">
                                            <img
                                                src="img/image 19.png"
                                                alt="High-quality cleaning"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="rectangle bg-white text-black fw-bold d-flex justify-content-center align-items-center text-center">
                                            <p className="px-4 py-2 m-0">
                                                High-quality cleaning and<br />painting solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="position-relative d-flex justify-content-center my-5 text-center">
                                        <div className="square-image">
                                            <img
                                                src="/img/image 20.png"
                                                alt="Attention to detail"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="rectangle bg-white text-black fw-bold d-flex justify-content-center align-items-center text-center">
                                            <p className="px-4 py-2 m-0">
                                                Attention to detail and<br />customer satisfaction
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="position-relative d-flex justify-content-center my-5 text-center">
                                        <div className="square-image">
                                            <img
                                                src="/img/image 21.png"
                                                alt="Affordable pricing"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="rectangle bg-white text-black fw-bold d-flex justify-content-center align-items-center text-center">
                                            <p className="px-4 py-2 m-0">
                                                Affordable and<br />transparent pricing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cta">
                    <a className="btn button-1 text-white fw-semibold px-5 py-3" href="#ContactUS">
                        Talk to Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;