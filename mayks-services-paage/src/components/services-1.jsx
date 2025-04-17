const Services1 = () => {
    return (
        <section className="services-1" id="Services-1">
            
            <div className="container spacing-y position-relative">
            <div className="bg-wrapper"></div>
                <h1 className="services-spacing text-center bounce">
                    Looking For House Cleaning Services?
                </h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row align-items-start r-spacing-y">
                            <div className="col-3 col-md-2">
                                <div className="round-icon bg-white">
                                    <img
                                        src="/img/broom (2).png"
                                        alt="Basic Cleaning"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-9 col-md-10">
                                <h4>Basic Cleaning</h4>
                                <p>Regular maintenance and tidying up to keep your home fresh and organized.</p>
                            </div>
                        </div>
                        <div className="row align-items-start r-spacing-y">
                            <div className="col-3 col-md-2">
                                <div className="round-icon bg-white">
                                    <img
                                        src="/img/housekeeping.png"
                                        alt="Deep Cleaning"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-9 col-md-10">
                                <h4>Deep Cleaning</h4>
                                <p>A thorough cleaning of all surfaces, fixtures, and hard-to-reach areas.</p>
                            </div>
                        </div>
                        <div className="row align-items-start r-spacing-y">
                            <div className="col-3 col-md-2">
                                <div className="round-icon bg-white">
                                    <img
                                        src="/img/clean-house.png"
                                        alt="Move-In/Move-Out Cleaning"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-9 col-md-10">
                                <h4>Move-In/Move-Out Cleaning</h4>
                                <p>Specialized cleaning services for new and existing tenants to ensure a spotless transition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services1;
