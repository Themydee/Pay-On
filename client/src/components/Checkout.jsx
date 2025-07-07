import React from "react";
import "./Stepper.css";

export default function CheckoutStepper({ steps, activeStep }) {
  return (
    <div className="stepper">
      {steps.map((label, idx) => (
        <React.Fragment key={label}>
          <div className={`step${idx <= activeStep ? " active" : ""}`}>
            <div className="circle">{idx + 1}</div>
            <span>{label}</span>
          </div>
          {idx < steps.length - 1 && <div className="step-line" />}
        </React.Fragment>
      ))}
    </div>
  );
}