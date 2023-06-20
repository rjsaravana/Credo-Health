import "./style.css";

const About: React.FC = () => {
  return (
    <section className="mt-5 pt-5" id="About">
      <div className="row">
        <div className="col-lg-6 col-12 about-back-color">
          <h2 className="heal-life-header">Be Aware About Your Body</h2>
          <p className="about-para mt-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, <br></br>
            <br></br>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied
          </p>
          <h4 className="Download-head mt-5">Download here</h4>
          <div className="mt-4">
            <img
              className="playstore-btn"
              src="../assets/icons/play-store.png"
              alt="playstore"
            />
            <img
              className="appstore-btn ms-4 "
              src="../assets/icons/app-store.png"
              alt="appstore"
            />
          </div>
        </div>

        <div className="about-imgback-color col-lg-6 col-12 d-flex justify-content-center mb-5">
          <img
            className="about-back-img"
            src="../assets/Group1.png"
            alt="Img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
