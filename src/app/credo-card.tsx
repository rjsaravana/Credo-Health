import { Card } from "antd";
import "./style.css";

const Credocard: React.FC = () => {
  return (
    <section>
<div>
    <h2 className="heal-life-header">So There is the Plans to lead healthy Life</h2>
</div>
      <div className="card p-5" style={{borderRadius:'15px'}}>
        <div className="row ms-lg-5">
          <div className="col-lg-4 col-md-6 col-12 card-content mt-3">
            <div className="vector-icon">
              <img src="../assets/icons/Vector1.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-5">Precision Care Plan</h3>
            <p className="card-para"> 
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat{" "}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 card-content mt-3">
            <div className="vector-icon">
              <img src="../assets/icons/Vector2.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-5">Continues Monitoring of Vitals</h3>
            <p className="card-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat{" "}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 card-content mt-3">
            <div className="vector-icon">
              <img src="../assets/icons/Vector3.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-5">Digital Health Passport</h3>
            <p className="card-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat{" "}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 card-content mt-3">
            <div className="vector-icon">
              <img src="../assets/icons/Vector4.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-5">Medication Management</h3>
            <p className="card-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat{" "}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 card-content mt-3">
            <div className="vector-icon">
              <img src="../assets/icons/Vector5.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-5">Medication Management</h3>
            <p className="card-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat{" "}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 card-content mt-3">
            <div className="vector-icon">
              <img src="../assets/icons/Vector6.png" alt="Vector Img" />
            </div>
            <h3 className="card-headline mt-5">Recipes</h3>
            <p className="card-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credocard;
