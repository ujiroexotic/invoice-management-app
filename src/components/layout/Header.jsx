export default function Header({ invoices = [], onNewInvoice }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        marginLeft: "100px",
        marginTop: "50px",
      }}
    >
      {/* LEFT SIDE */}
      <div>
        <h2 style={{ margin: 0 }}>Invoices</h2>
        <p style={{ margin: "5px 0", color: "#888EB0" }}>
          {invoices.length === 0
            ? "There are 7 total invoices"
            : `There are ${invoices.length} total invoices`}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* FILTER (simple version for now) */}
        <label>Filter by status</label>
        <select style={{ padding: "2px", cursor: "pointer" }}>
          <option></option>
          <option>Draft</option>
          <option>Pending</option>
          <option>Paid</option>
        </select>

        {/* NEW BUTTON */}
        <button
          onClick={onNewInvoice}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#7C5DFA",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          <span
            style={{
              background: "#fff",
              color: "#7C5DFA",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            +
          </span>
          New Invoice
        </button>
      </div>
    </div>
  );
}