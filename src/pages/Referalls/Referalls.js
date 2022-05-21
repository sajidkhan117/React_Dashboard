import React from "react";
import "./Referalls.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import { GiHazardSign } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic5.png";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.png";

function Referalls(props) {
  return (
    <div className="referalls" id="referalls">
      <div className="main-container">
        <div className="referral-left">
          <div className="upper">
            <div className="upper-header">
              <p>Referral</p>
            </div>

            <div className="lower-main">
              <div className="upper-content">
                <div className="upper-img-content">
                  <img src={pic1} alt="pic1" />
                  <p>
                    <a href="/">xxxx@gmail.com</a> Just reffered
                  </p>
                </div>
                <a className="link" href="/">
                  xxxx@yahoo.com
                </a>
              </div>
              <div className="upper-content">
                <div className="upper-img-content">
                  <img src={pic2} alt="pic2" />
                  <p>
                    <a href="/">xxxx@gmail.com</a> Just reffered
                  </p>
                </div>
                <a className="link" href="/">
                  xxxx@yahoo.com
                </a>
              </div>
              <div className="upper-content">
                <div className="upper-img-content">
                  <img src={pic3} alt="pic3" />
                  <p>
                    <a href="/">xxxx@gmail.com</a> Just reffered
                  </p>
                </div>
                <a className="link" href="/">
                  xxxx@yahoo.com
                </a>
              </div>
              <div className="upper-content">
                <div className="upper-img-content">
                  <img src={pic4} alt="pic4" />
                  <p>
                    <a href="/">xxxx@gmail.com</a> Just reffered
                  </p>
                </div>
                <a className="link" href="/">
                  xxxx@yahoo.com
                </a>
              </div>

              <a className="btn" href="/">
                See All
              </a>
            </div>
          </div>
          <div className="lower">
            <div className="lower-header">
              <i className="Lower_icon">
                {" "}
                <GiHazardSign />
              </i>
              <p>Referral Bonus</p>
            </div>
            <div className="lower-down-content">
              <p>The Referral Bonus is ongoing would you like to stop it ?</p>
              <div>
                <p>ON</p>
                <p>OFF</p>
              </div>
            </div>
          </div>
        </div>
        <div className="refferal-right">
          <div className="top">
            <div className="top-header">
              <p>Referral Stats</p>
              <a href="/" style={{ color: "#0C8CE9" }}>
                18000/30000 users
              </a>
              <i>
                {" "}
                <BsChevronDoubleDown />
              </i>
            </div>
            <div className="top-content">
              <p>
                <a href="/">60%</a> of users have referred their friends
              </p>
            </div>
          </div>

          <div className="bottom">
            <div className="bottom-header">
              <div className="Refferrals_align">
                <p>Top Referrals</p>
                <p>
                  All <BiChevronDown />
                </p>
              </div>

              <i>
                <BsChevronDoubleDown />
              </i>
            </div>
            <div className="bottom-body">
              <div className="bottom-body-item">
                <p>1</p>
                <div className="bottom-img">
                  <img src={pic5} alt="pic5" />
                  <p>maisumabbas.charbu@gmai.com</p>
                </div>
                <a href="/">view Details </a>
              </div>
              <div className="bottom-body-item">
                <p>2</p>
                <div className="bottom-img">
                  <img src={pic6} alt="pic6" />
                  <p>maisumabbas.charbu@gmai.com</p>
                </div>
                <a href="/">view Details</a>
              </div>
              <div className="bottom-body-item">
                <p>3</p>
                <div className="bottom-img">
                  <img src={pic7} alt="pic7" />
                  <p>maisumabbas.charbu@gmai.com</p>
                </div>
                <a href="/">view Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referalls;
