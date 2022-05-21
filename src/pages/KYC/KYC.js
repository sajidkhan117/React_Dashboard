import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import "./KYC.css";
import { KYCData } from "./KYCData";
import user from "./assets/user.png";
import addison from "./assets/addison.png";
import Inside from "./assets/Inside.png";
import Front from "./assets/Front.png";
import Back from "./assets/Back.png";
import EyeIcon from "./assets/EyeIcon.png";

function KYC(props) {
  return (
    <div className="kyc" id="kyc">
      <div className="kyc_container">
        <div className="kyc_leftSide">
          <div className="kyc_left_header">
            <h4>KYC Verification</h4>
            <span>
              <BsChevronDoubleDown />
            </span>
          </div>

          {KYCData.map((items, key) => (
            <div className="leftSide_content_container">
              <div className="leftSide_content">
                <img src={user} alt="user" className="user_image" />
                <div className="user_gmail">{items.gmail}</div>
                <span> just </span>
                <div className="user_status">{items.status}</div>
              </div>
              <div className="leftSideBtns">
                <button className="refute_btn">Refute Documents</button>
                <button className="verify_btn">Verify Documents</button>
              </div>
            </div>
          ))}
          <div className="fullScreen_btnWrapper">
            <button className="fullScreen_btn">View fullscreen</button>
          </div>
        </div>

        <div className="kyc_rightSide">
          <div className="kyc_rightSide_1">
            <div className="kyc_right_header">
              <h4>Membership Stats</h4>
              <span className="darkBlue">90000/300000 Use</span>
              <span>All</span>
              <span>
                <BsChevronDoubleDown />
              </span>
            </div>
            <p>
              <span className="thirtyPercent">30%</span> of users have verified
              their account
            </p>
          </div>
          <div className="kyc_rightSide_2">
            <div className="about_user">
              <div className="user_img">
                <img src={addison} alt="" className="rightUserIMG" />
              </div>
              <div className="user_data">
                <a href="/">addisonpacx@gmail.com</a>
                <p>Name: Gallavan doe Johnson</p>
                <p>ID: Passport</p>
                <button className="viewDetails_btn">View details ^</button>
              </div>
            </div>
            <div className="user_slides">
              <div className="slideIMGS_container">
                <p>Inside</p>
                <img src={Inside} alt="Inside" className="slideIMGS" />
                <img src={EyeIcon} alt="EyeIcon" className="eyeIcon" />
              </div>
              <div className="slideIMGS_container">
                <p>Front</p>
                <img src={Front} alt="front" className="slideIMGS" />
                <img src={EyeIcon} alt="EyeIcon" className="eyeIcon" />
              </div>
              <div className="slideIMGS_container">
                <p>Back</p>
                <img src={Back} alt="back" className="slideIMGS" />
                <img src={EyeIcon} alt="EyeIcon" className="eyeIcon" />
              </div>
            </div>
            <div className="rightSideBtns">
              <button className="refute_btn2">Refute Documents</button>
              <button className="verify_btn2">Verify Documents</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KYC;
