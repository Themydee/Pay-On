import React from "react";

export default function Confirmation({
  booking,
  onSeeBookings,
  onBookingConfirmed,
  infoData,
  paymentData,
}) {
  return (
    <div className="confirmation">
      <div className="success-checkmark">✔</div>
      <h3>Booking confirmed</h3>
      <p>
        Your booking has been processed. Please check your email for details. 
      </p>
      
    </div>
  );
}