const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg nav-bg-col"
      style={{ position: 'sticky', top: 0, zIndex: 999 }}
    >
      <div className="container">
        <div className="logo">
          <img src="/img/proto-logo.png" alt="Logo" />
        </div>
        <a className="navbar-brand text-white logo-text fs-2 px-3" href="#Home">
          Mayks Services
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto my-2 my-lg-0 mx-3 align-items-lg-center"
          >
            <li className="nav-item">
              <a className="nav-link text-white mx-2" href="#Hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mx-2" href="#Services-1">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mx-2" href="#AboutUs">
                About Us
              </a>
            </li>
            <li className="nav-item mt-3 mt-lg-0">
              <a className="btn button-1 text-white px-5 py-3" href="#ContactUS">
                Want to talk?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
