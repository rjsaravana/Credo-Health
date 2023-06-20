import "./style.css";

const Contact: React.FC = () => {
  return (
    <section className="mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 contact-background">
          <div>
            <h4 className="contact-head">
              Free Consultation with an expert now
            </h4>
          </div>
          <div className="input-boxes">
            <input className="name-input mt-3" placeholder="Full name" type="text" />
            <select className="name-input mt-3 ms-5" aria-label="Default select example">
              <option selected>Select City</option>
              <option value="1">Tiruchengode</option>
              <option value="2">Erode</option>
              <option value="3">Trichy</option>
              <option value="4">Salem</option>
            </select>
          </div>
          <div className="input-boxes"> 
            <input className="name-input mt-3" placeholder="Contact Number" type="text" />
            <input className="name-input  mt-3 ms-5" placeholder="Email" type="text" />
          </div>
          <div className="input-full-boxes mt-3">
            <select className="name-input mt-3" aria-label="Default select example">
              <option selected>Select Program</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-boxes mt-5">
            <textarea placeholder="You can share your Thoughts" cols={80} rows={5}></textarea>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12"></div>
      </div>
    </section>
  );
};

export default Contact;
