import "./style.css";

const Navbar:React.FC = () => {
    return (
      <div className="nav-title">
        <nav className="navbar-expand-lg" id="navbar">
          <h4 className="logo">
            Credo health <br />
            <img src="../assets/icons/Ellipse.png" alt="img" />
            <span>Decoding Chronic Care</span>

          <button
            className="navbar-toggler menu-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          </h4>
          <div
            className="collapse navbar-collapse"
            id="menu"
          >
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a href="">Credo Health Features</a>
              </li>
              <li className="nav-item">
                <a href="">Know Your Health Score</a>
              </li>
              <li className="nav-item">
                <a href="">Health Tips</a>
              </li>
              <li className="nav-item">
                <a href="">About Us</a>
              </li>
              <li className="nav-item">
                <a href="">Leadership</a>
              </li>
              <li className="nav-item">
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="#">
      //     Navbar
      //   </a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNavAltMarkup"
      //     aria-controls="navbarNavAltMarkup"
      //     aria-expanded="true"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //     <div className="navbar-nav">
      //       <a className="nav-item nav-link active" href="#">
      //         Home
      //       </a>
      //       <a className="nav-item nav-link" href="#">
      //         Features
      //       </a>
      //       <a className="nav-item nav-link" href="#">
      //         Pricing
      //       </a>
      //       <a className="nav-item nav-link" href="#">
      //         Disabled
      //       </a>
      //     </div>
      //   </div>
      // </nav>
    );
  }

export default Navbar;
