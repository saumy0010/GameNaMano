import Image from "next/image";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
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
      <div className="dfc social-icons">
        <div className="icon-container dfc">
          <Image src="/twitter.svg" width={40} height={40} alt="twitter" />
        </div>
        <div className="icon-container dfc">
          <Image src="/facebook.svg" width={40} height={40} alt="facebook" />
        </div>
        <div className="icon-container dfc">
          <Image src="/instagram.svg" width={40} height={40} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
