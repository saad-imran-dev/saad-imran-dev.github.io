import axios from "axios";

const sendEmail = (name, email, message) => {
  return axios.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      service_id: process.env.REACT_APP_Email_service_id,
      template_id: process.env.REACT_APP_Email_template_id,
      user_id: process.env.REACT_APP_Email_user_id,
      template_params: {
        name,
        email,
        message
      }
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export default { sendEmail };
