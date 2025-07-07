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
      {booking && (
        <div className="booking-summary">
          <div>
            <strong>Room:</strong> {booking.room}
          </div>
          <div>
            <strong>Date:</strong> {booking.date}
          </div>
          <div>
            <strong>Time:</strong> {booking.time}
          </div>
          <div>
            <strong>Host:</strong> {booking.host}
          </div>
          <div>
            <strong>Attendees:</strong>
            {booking.attendees &&
              booking.attendees.map((a, idx) => (
                <img
                  key={idx}
                  src={a}
                  alt="attendee"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    marginLeft: 4,
                  }}
                />
              ))}
          </div>
          <div>
            <strong>Cost:</strong> {booking.cost}
          </div>
          <div>
            <strong>Total:</strong> {booking.total}
          </div>
          <div>
            <strong>Payment:</strong> {booking.payment}
          </div>
        </div>
      )}
      <div className="confirmation-actions">
        <button className="primary" onClick={onSeeBookings}>
          See My bookings
        </button>
      </div>
    </div>
  );
}