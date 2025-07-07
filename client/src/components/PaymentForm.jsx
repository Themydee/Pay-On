import React, { useState } from "react";

export default function PaymentForm({ onSubmit, onBack, infoData }) {
  const [form, setForm] = useState({
    method: "card",
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardName: "",
    invoice: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass all data to parent for backend processing
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Enter Payment Details</h3>
      <div>
        <label>Select method</label>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="card"
              name="method"
              checked={form.method === "card"}
              onChange={handleChange}
            />
            Debit/Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="paypal"
              name="method"
              checked={form.method === "paypal"}
              onChange={handleChange}
            />
            PayPal
          </label>
        </div>
      </div>
      {form.method === "card" && (
        <>
          <div className="form-row">
            <div>
              <label>Card Number</label>
              <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required />
            </div>
            <div>
              <label>Expiry</label>
              <input name="expiry" value={form.expiry} onChange={handleChange} required placeholder="MM/YY" />
            </div>
            <div>
              <label>CVC</label>
              <input name="cvc" value={form.cvc} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <label>Cardholder's Name</label>
            <input name="cardName" value={form.cardName} onChange={handleChange} required />
          </div>
        </>
      )}
      <div>
        <label>Invoice</label>
        <select name="invoice" value={form.invoice} onChange={handleChange}>
          <option value="">Select address</option>
          <option value="home">Home Address</option>
          <option value="office">Office Address</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="saveInfo"
            checked={form.saveInfo}
            onChange={handleChange}
          />
          Save my payment information for future use
        </label>
      </div>
      <button type="submit" className="primary">Pay now</button>
      <button type="button" className="secondary" onClick={onBack}>
        Back
      </button>
    </form>
  );
}