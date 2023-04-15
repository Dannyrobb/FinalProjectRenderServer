import { Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

const Slider = (props) => {
  return (
    <Fade big>
      <div
        id="slider"
        style={{
          backgroundColor: "white",
          paddingBottom: "30px",
          paddingTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel interval={6000} fade pause={false} ride={"caurosel"}>
          <Carousel.Item>
            <img style={{ maxWidth: "80vw" }} className=" rounded mx-auto d-block" src="images/MobileLogin.gif" alt="First slide" />
            <div className="sliderText" style={{ height: "5vh" }}></div>
            <Carousel.Caption className="captionSlider">
              <h5 class="sliderTextActual" style={{ color: "black", margin: 1 }}>
                {" "}
                First step: Register
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ maxWidth: "80vw" }} className=" rounded mx-auto d-block" src="images/Search.gif" alt="Second slide" />
            <div className="sliderText" style={{ height: "5vh" }}></div>
            <Carousel.Caption className="captionSlider">
              <h5 class="sliderTextActual" style={{ color: "black", margin: 1 }}>
                Second step: Search for businesses
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ maxWidth: "80vw" }} className=" rounded mx-auto d-block" src="images/review.gif" alt="Third slide" />
            <div className="sliderText" style={{ height: "5vh" }}></div>
            <Carousel.Caption className="captionSlider">
              <h5 class="sliderTextActual" style={{ color: "black", margin: 1 }}>
                Third Step: Review!
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fade>
  );
};
export default Slider;
