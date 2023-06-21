import "./style.css";

const EffectTool: React.FC = () => {
  return (
    <section className="effect-background">
      <div className="effect-tool mt-5 mb-5">
        By going flat the idea was that the interface is what it is a bunch of
        pixels displayed on a flat surface. While accurate and modern people
        understood something was missing. Some playfulness of actually “pushing”
        a{" "}
        <span style={{ color: "#1E80F3", fontSize: "32px" }}>
          More Effective Tools That will Change Your Life
        </span>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card card-1 p-4 mt-3">
            <div className="vector-icon1"> 
              <img className="vector-card-img" src="../assets/icons/Vector7.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-4">Diabetes Remission</h3>
            <p className="effect-card-para">
              By going flat the idea was that the interface is what it is a
              bunch of pixels displayed on a flat surface. While accurate and
              modern, people understood something was missing. playfulness of
              actually pushing” a button down instead of touching a flat
              surface.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card card-2 p-4 mt-3">
            <div className="vector-icon2">
              <img className="vector-card-img" src="../assets/icons/Vector8.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-4">Blood Pressure Management</h3>
            <p className="effect-card-para">
              By going flat the idea was that the interface is what it is a
              bunch of pixels displayed on a flat surface. While accurate and
              modern, people understood something was missing. playfulness of
              actually pushing” a button down instead of touching a flat
              surface.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card card-3 p-4 mt-3">
            <div className="vector-icon3">
              <img className="vector-card-img" src="../assets/icons/Vector9.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-4">Weight Management</h3>
            <p className="effect-card-para">
              By going flat the idea was that the interface is what it is a
              bunch of pixels displayed on a flat surface. While accurate and
              modern, people understood something was missing. playfulness of
              actually pushing” a button down instead of touching a flat
              surface.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card card-4 p-4 mt-3">
            <div className="vector-icon4">
              <img className="vector-card-img" src="../assets/icons/Vector10.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-4">Cardiac Wellness</h3>
            <p className="effect-card-para">
              By going flat the idea was that the interface is what it is a
              bunch of pixels displayed on a flat surface. While accurate and
              modern, people understood something was missing. playfulness of
              actually pushing” a button down instead of touching a flat
              surface.
            </p>
          </div>
        </div>
      </div>

      <div className="effect-card-content">
        <h2 className="img-car-header">Meet Our Expert Doctors</h2>
        <p className="img-card-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>

      <div className="img-card-content mt-4">
          <div>
            <div className="card-img">
              <img src="../assets/icons/image1.png" alt="Img" />
            </div>
            <h3 className="card-headline mt-3">Courtney Henry</h3>
            <h4 className="img-card-degree">
              MBBS, MD, PGCDM CC Diabetology (Australia)
            </h4>
          </div>
          <div>
            <div className="card-img">
              <img src="../assets/icons/image2.png" alt="Img" />
            </div>
            <h3 className="card-headline mt-3">Kristin Watson</h3>
            <h4 className="img-card-degree">
              MBBS, MD, PGCDM CC Diabetology (Australia)
            </h4>
          </div>
          <div>
            <div className="card-img">
              <img src="../assets/icons/image3.png" alt="Img" />
            </div>
            <h3 className="card-headline mt-3">Esther Howard</h3>
            <h4 className="img-card-degree">
              MBBS, MD, PGCDM CC Diabetology (Australia)
            </h4>
          </div>
          <div>
            <div className="card-img">
              <img src="../assets/icons/image4.png" alt="Img" />
            </div>
            <h3 className="card-headline mt-3">Brooklyn Simmons</h3>
            <h4 className="img-card-degree">
              MBBS, MD, PGCDM CC Diabetology (Australia)
            </h4>
          </div>
          <div>
            <div className="card-img">
              <img src="../assets/icons/image5.png" alt="Img" />
            </div>
            <h3 className="card-headline mt-3">Ronald Richards</h3>
            <h4 className="img-card-degree">
              MBBS, MD, PGCDM CC Diabetology (Australia)
            </h4>
          </div>
        </div>
    </section>
  );
};

export default EffectTool;
