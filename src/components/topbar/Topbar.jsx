import "./topbar.scss";
import { Call, Mail, LinkedIn, PinDrop} from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            S. C. Mohan
          </a>
          <div className="itemContainer">
            <a href="tel:+919416032149">
              <Call className="icon" />
              <span>+91-9416032149</span></a>
          </div>
          <div className="itemContainer">
            <a href="mailto:vivekverma326@gmail.com">
              <Mail className="icon" />
              <span>scmohanadvocate@gmail.com</span></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.google.com/maps/search/171%2F8,+Sector+8,+Karnal,+Haryana+132001,+India/@29.6965395,77.0076303,17z/data=!3m1!4b1"target="_blank">
              <PinDrop className="icon" />
              <span>178/8 Karnal,Haryana</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
