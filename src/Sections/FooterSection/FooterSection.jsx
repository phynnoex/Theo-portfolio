import React from "react";
import "./FooterSection.css";
import ContactForm from "../../components/ContactForm";
import { Element } from "react-scroll";

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
          <div className="leftFooter"></div>
          <div className="rightFooter">
            <h2>../Contact me</h2>
            <ContactForm />
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2025</p>
        </div>
      </div>
    </Element>
  );
}
