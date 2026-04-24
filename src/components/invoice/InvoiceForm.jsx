import React, { useState } from "react";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Invoice submitted:", formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Invoice</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="clientEmail"
          placeholder="Client Email"
          value={formData.clientEmail}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="amount"
          placeholder="Amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Save Invoice</button>
      </form>
    </div>
  );
};

export default InvoiceForm;