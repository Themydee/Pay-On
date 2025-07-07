import React, { useState } from "react";
import CheckoutStepper from "./components/Checkout";
import InformationForm from "./components/Information";
import PaymentForm from "./components/PaymentForm";
import Confirmation from "./components/Confirmation";
import "./App.css";

const steps = ["Information", "Payment", "Completed"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [infoData, setInfoData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [booking, setBooking] = useState(null);

  const handleInfoSubmit = (data) => {
    setInfoData(data);
    setActiveStep(1);
  };

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    // Pass data to backend here, then update booking state with backend response
    setActiveStep(2);
  };

  const handleBookingConfirmed = (bookingDetails) => {
    setBooking(bookingDetails); // Set booking details after backend response
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="checkout-container">
      <CheckoutStepper steps={steps} activeStep={activeStep} />
      <div className="checkout-content">
        {activeStep === 0 && (
          <InformationForm onSubmit={handleInfoSubmit} />
        )}
        {activeStep === 1 && (
          <PaymentForm
            onSubmit={handlePaymentSubmit}
            onBack={handleBack}
            infoData={infoData}
          />
        )}
        {activeStep === 2 && (
          <Confirmation
            booking={booking}
            onSeeBookings={() => {}}
            onBookingConfirmed={handleBookingConfirmed}
            infoData={infoData}
            paymentData={paymentData}
          />
        )}
      </div>
    </div>
  );
}

export default App;