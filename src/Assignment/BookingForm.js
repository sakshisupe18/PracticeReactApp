import { useState } from "react";
function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.phone) tempErrors.phone = "Phone number is required.";
    if (!formData.date) tempErrors.date = "Appointment date is required.";
    if (!formData.time) tempErrors.time = "Appointment time is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setConfirmation(`Appointment booked successfully for ${formData.date} at ${formData.time}`);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: ""
      });
    } else {
      setConfirmation("");
    }
  };
  return (
    <div>
      <h2>Appointment Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.fullName}</p>
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.phone}</p>
        <label>Appointment Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.date}</p>
        <label>Appointment Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.time}</p>
        <button type="submit">Book Appointment</button>
      </form>
      {confirmation && <h3 style={{ color: "green" }}>{confirmation}</h3>}
    </div>
  );
}

export default BookingForm;