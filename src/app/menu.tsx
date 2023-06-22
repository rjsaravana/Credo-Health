import "./style.css";

const Menu: React.FC = () => {
  return (
    <div className="menu-background mt-5">
      <section className="mt-5">
        <div className="menu-back-color">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <h4 className="contact-head">About Credo Health</h4>
              <p className="menu-para">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat.{" "}
              </p>
              <button className="menu-download-btn">Download App</button>
            </div>
            <div className="col-lg-3 col-md-12 col-12 menu-headers">
              <h4 className="contact-head">Helping Link</h4>
              <h6>Credo Health Features</h6>
              <h6>Know Your Health Score</h6>
              <h6>Health Tips</h6>
              <h6>Blogs</h6>
              <h6>FAQ</h6>
            </div>
            <div className="col-lg-3 col-md-12 col-12 menu-headers">
              <h4 className="contact-head">About Credo Health</h4>
              <h6>About Us</h6>
              <h6>Leadership</h6>
              <h6>Life @ Credo</h6>
              <h6>Success Stories</h6>
              <h6>Career</h6>
            </div>
            <div className="col-lg-2 col-md-12 col-12 menu-headers">
              <h4 className="contact-head">Know More</h4>
              <h6>Term & Conditions</h6>
              <h6>Privacy Policy</h6>
              <h6>Return & Refund Policy</h6>
            </div>
          </div>

          <hr style={{fontSize:'45px', height:'15px', marginTop:'40px', color:'rgb(123, 139, 160)'}} />
          <div className="row text-center">
            <h6 className="copyright-text"> &#9400; Copyright 2023.Credo Health. All Right Reserved.</h6>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Menu;
