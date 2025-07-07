# Workspace Platform Checkout UI

This project implements a responsive checkout flow for booking a workspace, inspired by the design shown below.

## Features

- **Multi-step Checkout:**  
  1. **Information Step:** Users fill in their personal and company details.
  2. **Payment Step:** Secure payment input with card and PayPal methods.
  3. **Confirmation Step:** Booking summary including details, attendees, and payment info.

- **Modern UI:** Clean, minimal, and easy to use.
- **Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).**

---

## Preview

![Checkout UI Preview](image1)

---

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/pay-on.git
cd workspace-checkout-ui
npm install
```

### 2. Run Development Server

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## Project Structure

- `src/App.jsx` — Main app with step navigation logic
- `src/components/CheckoutStepper.jsx` — Stepper navigation UI
- `src/components/InformationForm.jsx` — User/company info form
- `src/components/PaymentForm.jsx` — Payment method and details form
- `src/components/Confirmation.jsx` — Booking confirmation summary
- `src/App.css` — Main styles

---

## Customization

- Style and color scheme can be easily adjusted in `src/App.css` and related component CSS.
- Extend or integrate with a real backend as needed.

---

## License

MIT
