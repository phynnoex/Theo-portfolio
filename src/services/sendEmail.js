const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


const sendEmail = (e) => {
    emailjs
      .send(
        service_id,template_id,
        
        {
          from_name: inputs.email,
          name: inputs.email,
          message:inputs.message,
          email: inputs.email,
        }, public_key
      )
      .then(
        (result) => {
          alert("message sent succesfully!");
        },
        (error) => {
          alert("failed to send message");
        }
      );
  };

  export default sendEmail