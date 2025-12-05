import React from "react";
import ContactCard from "./ContactCard";
const ContactApp = () => {
  const contacts = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "555-1234",
      address: "123 Maple Street, Springfield",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "555-5678",
      address: "456 Oak Avenue, Metropolis",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      phone: "555-8765",
      address: "789 Pine Road, Gotham",
    },
  ];
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  };
  const cardWrapper = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
  };
  return (
    <div style={containerStyle}>
      <h1>Contact List</h1>
      <div style={cardWrapper}>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            address={contact.address}
          />
        ))}
      </div>
    </div>
  );
};
export default ContactApp;
