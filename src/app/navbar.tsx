import "./style.css";

const Navbar: React.FC = () => {
  return (
    <div className="nav-title">
      <nav className="navbar-expand-lg" id="navbar">
        <h4 className="logo">
           <span style={{fontSize:'24',fontWeight:'800',color:'#1E80F3'}}>Credo</span> health <br />
          <img style={{marginLeft:'35px', marginTop:'-20px'}} src="../assets/icons/Ellipse.png" alt="img" />
          <span className="nav-decoding">Decoding Chronic Care</span>

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
  );
};

export default Navbar;
