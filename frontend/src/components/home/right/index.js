import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";
import "./style.css";
import { left } from "../../../data/home"
 import LeftLink from "./leftLink";
import { ArrowDown1 } from "../../../svg";
//import Shortcut from "./Shortcut";

export default function RightHome({ user }) {
  const color = "#65676b";
  return (
    <div className="right_home">
      <div className="heading">Sponsored</div>
      <div className="splitter1"></div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Contacts</div>
          <div className="contacts_header_right">
            <div className="contact_circle hover1">
              <NewRoom color={color} />
            </div>
            <div className="contact_circle hover1">
              <Search color={color} />
            </div>
            <div className="contact_circle hover1">
              <Dots color={color} />
            </div>
           
          </div>
        </div>
        <div className="contacts_list">
          <Contact user={user} />
        </div>
        {/* {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))} */}
      </div>
    </div>
  );
}
