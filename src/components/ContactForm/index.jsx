import { forwardRef, useRef, useState } from "react";
import "./styles.css";
import sendEmail from "../../services/sendEmail";
import './styles.css'

export default function ContactForm() {
  const [inputs, setInputs] = useState({title:"", email:"", message:""});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, title, message} = inputs;
    const newErrors = {};
    if(!email){ newErrors.email = "Email is required";}
    if(!title){ newErrors.title = "Title is required";}
    if(!message){ newErrors.message = "Message is required";}
    setErrors(newErrors);
    if(Object.keys(newErrors).length > 0) return;
    sendEmail(event, inputs, setInputs);
    
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="TITLE"
        className="inputField"
        value={inputs.title}
        onChange={handleChange}
      />
      {errors.title && <span className="error">{errors.title}</span>}
      <input
        name="email"
        type="email"
        placeholder="EMAIL"
        className="inputField"
        value={inputs.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      <textarea
        name="message"
        placeholder="MESSAGE"
        className="messageField"
        value={inputs.message}
        onChange={handleChange}
      />
      {errors.message && <span className="error">{errors.message}</span>}
      <br />
      <input type="submit" className="submitButton"/>
    </form>
  );
}
