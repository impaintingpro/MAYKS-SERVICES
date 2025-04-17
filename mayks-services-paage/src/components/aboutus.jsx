const aboutus = () => {
    return (
        <section
            className="text-white py-5 aboutus"
            style={{
                backgroundImage: "url('/img/clay-banks-kBaf0DwBPbE-unsplash (1).png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh'
            }}
            id="AboutUs"
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="text-start">
                            <h1 className="aboutus-text fw-bold">Who We Are?</h1>
                            <p className="lead mb-4 py-5 fw-normal">
                                We at Mayks Services are committed to providing exceptional service that
                                consistently exceeds expectations and delivers exceptional results.
                                <br /><br />
                                Are you seeking a professional painting service to transform the color of your walls? Or perhaps you are too preoccupied with other
                                tasks to maintain a clean and organized home? Contact us now!
                            </p>
                            <a className="btn button-1 text-white fw-semibold px-5 py-3" href="#ContactUS">
                                Talk to Us
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Removed the image from the column since it's now the background */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default aboutus;