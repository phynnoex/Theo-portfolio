import React from "react";
import "./FooterSection.css";
import ContactForm from "../../components/ContactForm";
import { Element } from "react-scroll";
import contactImage from "../../assets/contactUsImage.png";

export default function FooterSection(params) {
  const handleSubmit = () => {
    if (formRef.current) {
      console.log(formRef.current);
      formRef.current.submit();
    }
  };
  return (
    <Element name="Contacts">
      <div className="footerSection">
        <div className="contentContainer">
          <div className="leftFooter">
          </div>
          <div className="rightFooter">
            <h2>Let's Work <br /> Together</h2>
            <ContactForm />
            <div className="copyright">
              <p>Copyright © 2025</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
