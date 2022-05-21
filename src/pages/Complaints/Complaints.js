import React from "react";
import "./Complaints.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";


function Complaints(props) {
  return (
    <div className="complaints" id="complaints">
      <div className="Complaints_whole" id="notifications">
        <div className="Complaints_container" id="memberships">
          <div className="Complaints_content">
            <div className="Complaints_count">
              <div>Complaints</div>
              <div>
                Unread{" "}
                <span className="complaints_arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>
              <div>
                All{" "}
                <span className="complaints_arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>
              <div>
                <BsChevronDoubleDown />
              </div>
            </div>

            <div className="Complaints_DAta">
              <div className="C_Data">
                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>
              </div>
            </div>
          </div>

          <div className="Complaints_gmail">
            <div className="Gmail_data_center">
              <div className="Gmail_portion">
                {" "}
                <p>
                  {" "}
                  <span className="G_Form">From </span>{" "}
                  <span className="gmail_color">gypsy@yahoo.com</span> : Sir i
                  just iio asfy..{" "}
                </p>{" "}
              </div>
              <div className="Gmail_lorem">
                {" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  sit dignissim et convallis at phasellus congue tortor
                  vulputate. Sit justo mi at quis etiam ut. Nulla elementum,
                  faucibus empus sed quam scelerisque leo. Est nulla et ornare
                  in nibh. Convallis pretium mauris ut sem posuere amet nunc. Et
                  mattis sapien, id amet. Massa sit nunc at tempor, amet
                  sagittis, a. Diam massa congue sit neque a. Netus facilisi
                  quis sed porta arcu. Lobortis eu diam, urna, faucibus
                  {" "}
                </p>
              </div>
              <div className="Button_container">
                <div className="button_div">
                  <button className="Red_button">Mark as resolved</button>
                  <button className="blue_button"> Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaints;
