import { Pagination } from "antd";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

const UserReview: React.FC = () => {
  return (
    <section className="mt-5">
      <div className="effect-card-content">
        <h2 className="img-car-header">User Review</h2>
        <p className="img-card-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}

      <div className="use-review">
        <div className="review-card1">
          <img src="../assets/icons/opensvg.png" alt="img" />
          <p className="review-para mb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Velit officia consequat duis
            enim velit mollit
          </p>
          <hr />
          <div
            className="mt-4"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <img src="../assets/icons/avatar.png" alt="Img" />
            </div>
            <div>
              <h4 className="review-first-header">Brooklyn Simmons</h4>
              <h6 className="review-second-header">CEO at Talent Show</h6>
            </div>
          </div>
        </div>

        <div className="review-card2">
          <img src="../assets/icons/opensvg.png" alt="img" />
          <p className="review-para mb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Velit officia consequat duis
            enim velit mollit
          </p>
          <hr />
          <div
            className="mt-4"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <img src="../assets/icons/avatar1.png" alt="Img" />
            </div>
            <div>
              <h4 className="review-first-header">Robert Anderson</h4>
              <h6 className="review-second-header">CEO at Talent Show</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReview;
