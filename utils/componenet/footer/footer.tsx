import Image from "next/image";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="dfc footer-top-text">
        <div>Privacy Notice</div>
        <div>Terms of Service</div>
        <div>Cookie Policy</div>
        <div>Company Information</div>
        <div>Cookie Preferences</div>
      </div>
      <div className="footerHr"></div>
      <div className="dfc copyright" style={{ opacity: 0.5 }}>
        Copyright © GameQuest, Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;