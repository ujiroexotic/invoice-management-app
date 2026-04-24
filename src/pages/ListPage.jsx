// pages/ListPage.js
import React, { useState } from "react";
import Header from "../components/layout/Header";
import InvoiceList from "../components/invoice/InvoiceList";
import Sidebar from "../components/layout/Sidebar";

export default function ListPage() {
  const [filter, setFilter] = useState("all");
  const invoices = [
    { id: "RT3080", clientName: "Jensen Huang", dueDate: "2021-08-19", amount: 1800.90, status: "paid" },
    { id: "XM9141", clientName: "Alex Grim", dueDate: "2021-09-20", amount: 556.00, status: "pending" },
    // …more invoices
  ];

  const filteredInvoices = invoices.filter(inv =>
    filter === "all" ? true : inv.status === filter
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "80px", flex: 1, padding: "40px" }}>
        <Header
          invoices={invoices}
          filter={filter}
          setFilter={setFilter}
          onNewInvoice={() => alert("Open New Invoice Form")}
        />
        <InvoiceList invoices={filteredInvoices} />
      </main>
    </div>
  );
}
