import React from "react";

interface Props {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<Props>> = ({
  email,
  message,
  name,
}) => {
  return (
    <div>
      <h1>Contact Form Submission</h1>
      <p>
        From <strong>{name}</strong> at {email}
      </p>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  );
};

export default ContactFormEmail;
