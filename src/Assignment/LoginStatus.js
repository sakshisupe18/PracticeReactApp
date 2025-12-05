import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // you can change to false

  return (
    <div>
      <h2>Login Status</h2>

      {/* Short circuiting */}
      {isLoggedIn && <p>You are logged in</p>}
    </div>
  );
}

export default LoginStatus;
