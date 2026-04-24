// export default function InvoiceItemRow({
//   item,
//   index,
//   updateItem,
//   removeItem,
// }) {
//   return (
//     <div className="itemRow">
//       {/* Item Name */}
//       <input
//         type="text"
//         placeholder="Item name"
//         value={item.name}
//         onChange={(e) =>
//           updateItem(index, "name", e.target.value)
//         }
//       />

//       {/* Quantity */}
//       <input
//         type="number"
//         placeholder="Qty"
//         value={item.qty}
//         min="1"
//         onChange={(e) =>
//           updateItem(index, "qty", Number(e.target.value))
//         }
//       />

//       {/* Price */}
//       <input
//         type="number"
//         placeholder="Price"
//         value={item.price}
//         min="0"
//         onChange={(e) =>
//           updateItem(index, "price", Number(e.target.value))
//         }
//       />

//       {/* Total (read-only) */}
//       <span className="itemTotal">
//         ${item.qty * item.price}
//       </span>

//       {/* Remove button */}
//       <button
//         type="button"
//         onClick={() => removeItem(index)}
//       >
//         ✕
//       </button>
//     </div>
//   );
// }

// components/InvoiceItem.js
import React from "react";

export default function InvoiceItem({ invoice }) {
  const { id, clientName, dueDate, amount, status } = invoice;

  const statusColors = {
    paid: "#33D69F",
    pending: "#FF8F00",
    draft: "#373B53",
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        marginBottom: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <div>
        <strong>#{id}</strong>
        <div style={{ fontSize: "0.9rem", color: "#888EB0" }}>
          Due {dueDate}
        </div>
        <div style={{ fontSize: "0.9rem", color: "#888EB0" }}>
          {clientName}
        </div>
      </div>

      <div style={{ fontWeight: "bold" }}>£{amount.toLocaleString()}</div>

      <span
        style={{
          fontWeight: "600",
          color: statusColors[status],
          textTransform: "uppercase",
        }}
      >
        {status}
      </span>
    </li>
  );
}
