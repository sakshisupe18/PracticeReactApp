import React from "react";
const ContactCard = ({ name, email, phone, address }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    width: "250px",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};
export default ContactCard;
