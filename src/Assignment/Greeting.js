import React from "react";
const Greeting = () => {
const currentHour = new Date().getHours();
  let greetingMessage;
  if (currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour >= 12 && currentHour <= 18) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }
  return (
    <div>
      <h1>{greetingMessage}</h1>
    </div>
  );
};
export default Greeting;
