import React from "react";
import "./AnnounceStyles.css";
import { AnnounceData } from "./AnnounceData";
import eye from "./icon/Icon.png";
import bold from './icon/b.png'
import ita from './icon/i.png'
import under from './icon/u.png'
import img from './icon/img.png'
import send from './icon/Vector.png'
import { BsChevronDoubleDown, BsChevronDown } from "react-icons/bs";

function Annoucements(props) {
  return (
    <div className="annoucements" id="annoucements">
      <div className="announce_leftSide">
        <div className="announce_left_header">
          <h4>Announcements</h4>
          <span className="announce_all">
            All
            <BsChevronDown/>
          </span>
          <span className="all_btn2">
            <BsChevronDoubleDown />
          </span>
        </div>
        {AnnounceData.map((items, key) => (
          <div className="announce_content_container">
            <div className="announce_content">
              <div className="icon">
                <img src={eye} alt="eye" />
              </div>
              <div className="views">{items.views}</div>
              <h3>{items.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="announce_rightSide">
        <div className="announce_right_header">
          <h4>New Post</h4>
          <span className="right_icons">
            Normal announcement
            <BsChevronDown className="ico" />
          </span>
        </div>
        <div className="announce_content_rightContainer">
            <div className="form_main">
            <div className="form_icons">
              <img src={bold} alt="bold" />
              <img src={ita} alt="ita" />
              <img src={under} alt="under" />
              <img src={img} alt="img" />
            </div>
            </div>
            <div className="form_input">
                <input type="text" placeholder="Main Subject" />
            </div>
            <div className="form_textarea">
              <textarea name="" id="" cols="60" rows="10" placeholder="Enter Message Here"></textarea>
            </div>
            <div className="form_btns">
            <button className="save_btn">Save to drafts</button>
            <button className="send_btn">Send <img src={send} alt="send"  /></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Annoucements;
