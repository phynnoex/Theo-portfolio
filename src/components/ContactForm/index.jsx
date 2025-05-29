import { forwardRef, useRef, useState } from "react";
import "./styles.css";
import emailjs from "emailjs-com";
import sendEmail from "../../services/sendEmail";
import './styles.css'

export default function ContactForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    sendEmail(event);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        className="inputField"
        value={inputs.title}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        className="inputField"
        value={inputs.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        className="messageField"
        value={inputs.message}
        onChange={handleChange}
      />
      <br />
      <input type="submit" className="submitButton"/>
    </form>
  );
}
