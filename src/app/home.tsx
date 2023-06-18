import "./style.css";

const Home: React.FC = () => {
  return (
    <section className="home-back-color" id="home">
      <div className="row">
        <div className="col-lg-6 col-12">
          <h3 className="credo-head">
            Lead A healthy Life With <br /> <span style={{color:'#1E80F3'}}  className="mt-2">Credo Health</span>
          </h3>
          <p className="credo-para mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="credo-btn mt-5">Download App</button>

          <h4 className="available-head mt-5">Available on</h4>
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

        <div className="col-lg-6 col-12">
          <img className="home-add-img" src="../assets/Group.png" alt="Img" />
          <img className="home-back-img" src="../assets/kindpng.png" alt="Img" />
        </div>
      </div> 
    </section>
  );
};

export default Home;
