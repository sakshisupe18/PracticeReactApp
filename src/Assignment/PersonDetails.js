import React from "react";
import { personsData } from "./personsData";
function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}
function PersonDetails() {
  return (
    <div>
      <h2>Person Details with Age</h2>
      {personsData.map((person, index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Date of Birth:</strong> {person.dateOfBirth}</p>
          <p><strong>Age:</strong> {calculateAge(person.dateOfBirth)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default PersonDetails;
