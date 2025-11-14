import { useState } from "react";
import '../css/Contact.css'
import Button from "../components/Button/Button";

const Contact = () => {

    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // handle change for each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    return (
    <div className="contact-container">
      <form className="contact-form">
        <h2>Contact Me</h2>

        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows="5"
        ></textarea>

        <Button text="Send a Message" specifyWidth={true}/>
      </form>
    </div>
  );
};

export default Contact