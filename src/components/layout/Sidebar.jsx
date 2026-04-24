// export default function Sidebar() {
//   return <aside className="sidebar">INV</aside>;
// }

// components/Sidebar.js
import React from "react";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "80px",
        backgroundColor: "#373B53",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        borderRadius: "0 20px 20px 0",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      {/* Logo at the top */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          backgroundColor: "#7C5DFA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        L
      </div>

      {/* Profile at the bottom */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <img
          src="https://via.placeholder.com/40"
          alt="User profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </aside>
  );
}
