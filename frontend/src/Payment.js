import { useEffect } from "react";

export default function Payment() {
  // Load Razorpay script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/enroll/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 }) // Example: ₹500
    });

    const data = await res.json();

    const options = {
      key: "YOUR_KEY_ID", // Replace with your Razorpay test key
      amount: data.amount,
      currency: "INR",
      order_id: data.id,
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Enroll in Course</h1>
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Pay ₹500
      </button>
    </div>
  );
}
