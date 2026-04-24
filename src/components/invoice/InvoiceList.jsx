// components/InvoiceList.js
import React from "react";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({ invoices }) {
  if (invoices.length === 0) {
    return <p style={{ color: "#888EB0" }}>No invoices found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {invoices.map(inv => (
        <InvoiceItem key={inv.id} invoice={inv} />
      ))}
    </ul>
  );
}
