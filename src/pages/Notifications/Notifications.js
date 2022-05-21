import React from "react";
import "./Notifications.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import { RiContactsBook2Fill} from "react-icons/ri"
import {MdOutlineLogin} from "react-icons/md"
import {GrContact} from "react-icons/gr"
function Notifications(props) {
  return (
    <div className="notifications" id="notifications">
      <div className="Notification_container" id="memberships">
        <div className="Notification_content">
          <div className="Notification_count">
            <div>Notfication</div>
            <div>All</div>
            <div>
              <BsChevronDoubleDown />
            </div>
          </div>

          <div className="Notification_DAta">
            <div className="Data">
              <p className="padd_bottom">
                <span className="Notification_icons"> <RiContactsBook2Fill /></span> <span className="span_color">Someone</span> just suscribed for membership
              </p>
              <p className="padd_bottom">
              <span  className="Notification_icons" ><MdOutlineLogin /> </span> <span className="span_color">Logins</span> statistaic for the day have been updated
              </p>

              <p className="padd_bottom">
                <span className="Notification_icons"  ><GrContact /></span> A new <span className="span_color">Complaint</span> just came in 
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    // </div>
  );
}

export default Notifications;
