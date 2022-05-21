import React from "react";
import "./Slideshow.css";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import icon from "./icon/Icon.png";
// import { slideData } from "./SlideData";

function Slideshow(props) {
  return (
    <div className="slideshow" id="slideshow">
      <h5 className="info_heading">
        <GrCircleInformation className="info_icon" />
        update the slides for dim wallte ( Display slides on the homepage)
      </h5>

      <div className="slide_container">
        <div className="image_slide">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/charged-mobile-phones-and-tablets-picture-id1269127423?b=1&k=20&m=1269127423&s=170667a&w=0&h=wWQDHyCKDRuL_jocSwO7G3Xpe0bPqwqRREwIAVDpenk="
              alt="one"
            />
            <div className="icon_b">
              <div className="icon">
                <img src={icon} alt="icon1" />
              </div>
            </div>
          </div>
          <div className="link">
            <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
          </div>
        </div>
        <div className="image_slide">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/woman-using-banking-app-on-the-smartphone-pay-utility-bill-financial-picture-id1331910730?b=1&k=20&m=1331910730&s=170667a&w=0&h=QlBX-Ep7vnd0aQFSb0J87Vfr4bWmRXMN2YkQmSljLZA="
              alt="two"
            />
            <div className="icon_b">
              <div className="icon">
                <img src={icon} alt="icon2" />
              </div>
            </div>
          </div>
          <div className="link">
            <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
          </div>
        </div>
        <div className="image_slide">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/charged-mobile-phones-and-tablets-picture-id1269127423?b=1&k=20&m=1269127423&s=170667a&w=0&h=wWQDHyCKDRuL_jocSwO7G3Xpe0bPqwqRREwIAVDpenk="
              alt="three"
            />
            <div className="icon_b">
              <div className="icon">
                <img src={icon} alt="icon3" />
              </div>
            </div>
          </div>
          <div className="link">
            <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="slide_container">
        <div className="image_slide">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/woman-using-banking-app-on-the-smartphone-pay-utility-bill-financial-picture-id1331910730?b=1&k=20&m=1331910730&s=170667a&w=0&h=QlBX-Ep7vnd0aQFSb0J87Vfr4bWmRXMN2YkQmSljLZA="
              alt="four"
            />
            <div className="icon_b">
              <div className="icon">
                <img src={icon} alt="icon4" />
              </div>
            </div>
          </div>
          <div className="link">
            <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
          </div>
        </div>
        <div className="image_slide">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/charged-mobile-phones-and-tablets-picture-id1269127423?b=1&k=20&m=1269127423&s=170667a&w=0&h=wWQDHyCKDRuL_jocSwO7G3Xpe0bPqwqRREwIAVDpenk="
              alt="five"
            />
            <div className="icon_b">
              <div className="icon">
                <img src={icon} alt="icon5" />
              </div>
            </div>
          </div>
          <div className="link">
            <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
          </div>
        </div>
        <div className="image_slide">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/woman-using-banking-app-on-the-smartphone-pay-utility-bill-financial-picture-id1331910730?b=1&k=20&m=1331910730&s=170667a&w=0&h=QlBX-Ep7vnd0aQFSb0J87Vfr4bWmRXMN2YkQmSljLZA="
              alt="six"
            />
            <div className="icon_b">
              <div className="icon">
                <img src={icon} alt="icon6" />
              </div>
            </div>
          </div>
          <div className="link">
            <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
