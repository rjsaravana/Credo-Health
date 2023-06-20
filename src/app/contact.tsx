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
            <input
              className="name-input mt-3"
              placeholder="Full name"
              type="text"
            />
            <select
              className="name-input mt-3 ms-4"
              aria-label="Default select example"
            >
              <option selected>Select City</option>
              <option value="1">Tiruchengode</option>
              <option value="2">Erode</option>
              <option value="3">Trichy</option>
              <option value="4">Salem</option>
            </select>
          </div>
          <div className="input-boxes">
            <input
              className="name-input mt-3"
              placeholder="Contact Number"
              type="text"
            />
            <input
              className="name-input  mt-3 ms-4"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="mt-3">
            <select
              className="input-full-boxes mt-3 p-2"
              placeholder="Select Program"
              aria-label="Default select example"
            >
              <option>Select Program</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="mt-5">
            <textarea
              className="p-3 textarea-full-boxes"
              placeholder="You can share your Thoughts"
            ></textarea>
          </div>
          <div>
            <button className="submit-btn mt-4">Submit</button>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-12 contact-blue-background">
          <h2 className="heal-life-header contact-header">
            Decode The New Age Clinical Experience!
          </h2>
          <p className="contact-card-para mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="mt-5">
            <img className="contact-image" src="../assets/expericence.png" alt="Img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
