const Services2 = () => {
    return (
        <section className="services-2">
            
            <div className="container spacing-y position-relative">
            <div className="bg-wrapper2"></div>
                <h1 className="services-spacing text-center">
                    How About Painting Services?
                </h1>
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="row align-items-start r-spacing-y">
                            <div className="col-3 col-md-2">
                                <div className="round-icon bg-white">
                                    <img
                                        src="/img/paint-brush.png"
                                        alt="Interior & Exterior Painting"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-9 col-md-10">
                                <h4>Interior & Exterior Painting</h4>
                                <p>Professional painting for both residential and commercial properties.</p>
                            </div>
                        </div>
                        <div className="row align-items-start r-spacing-y">
                            <div className="col-3 col-md-2">
                                <div className="round-icon bg-white">
                                    <img
                                        src="/img/painting.png"
                                        alt="Residential Painting"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-9 col-md-10">
                                <h4>Residential Painting</h4>
                                <p>Custom painting solutions to refresh and personalize your home.</p>
                            </div>
                        </div>
                        <div className="row align-items-start r-spacing-y">
                            <div className="col-3 col-md-2">
                                <div className="round-icon bg-white">
                                    <img
                                        src="/img/paint.png"
                                        alt="Commercial Painting"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-9 col-md-10">
                                <h4>Commercial Painting</h4>
                                <p>High-quality painting services tailored for businesses and industrial spaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services2;
