import React from "react";
import { PaystackButton } from "react-paystack";

export default function PaymentForm({ onSubmit, onBack, infoData }) {
  const publicKey = "pk_test_384e00a3f514b18465920ab6aefacff074495b73";
  const amount = 5000; // Naira, fixed
  const email = infoData?.email || ""; // get from info form

  const handleSuccess = (reference) => {
    // Only call onSubmit if payment is successful
    onSubmit({ paymentMethod: "paystack", reference });
  };

  // Do nothing onClose; user stays on this step
  const handleClose = () => {};

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: "Pay now",
    onSuccess: handleSuccess,
    onClose: handleClose,
    currency: "NGN",
  };

  return (
    <form className="form" onSubmit={e => e.preventDefault()}>
      <h3>Pay with Paystack</h3>
      <div>
        <label>Amount</label>
        <input value="₦5000" disabled readOnly style={{ background: "#f8f8f8" }} />
      </div>
      <div>
        <label>Email for receipt</label>
        <input value={email} disabled readOnly style={{ background: "#f8f8f8" }} />
      </div>
      <PaystackButton {...componentProps} className="primary" />
      <button type="button" className="secondary" onClick={onBack}>
        Back
      </button>
    </form>
  );
}