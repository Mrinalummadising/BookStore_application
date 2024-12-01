import { useState } from "react";
import "./index.css"; // Custom CSS for animation

const Checked = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate submitting form data and animation
    setTimeout(() => {
      setIsSubmitted(false);
      // You could handle actual form submission here (e.g., API request)
    }, 2000); // Adjust time for the animation to finish
  };

  return (
    <div className="checkout-container">
      <h2>Enter your details</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <div className="btn-form">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="success-animation">✔️</div>
      )}
    </div>
  );
};

export default Checked;
