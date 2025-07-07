import React, { useState } from "react";

export default function InformationForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    firstName: "",
    company: "",
    position: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Your Information</h3>
      <div className="form-row">
        <div>
          <label>Full name</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>First name</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={form.workEmail} onChange={handleChange} required type="email" />
      </div>
      <div>
        <label>Phone number</label>
        <input name="phone" value={form.phone} onChange={handleChange} required />
      </div>
      <button type="submit" className="primary">Continue to payment</button>
      <div className="form-footer">
        <a href="#">Need a hand?</a>
      </div>
    </form>
  );
}