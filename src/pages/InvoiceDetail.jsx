import { useParams, useNavigate } from "react-router-dom";
import { useInvoices } from "../context/InvoiceContext";
import StatusBadge from "../components/ui/StatusBadge";

export default function InvoiceDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { state, dispatch } = useInvoices();

  const invoice = state.invoices.find((i) => i.id === id);

  if (!invoice) return <p>Not found</p>;

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => nav("/")}>Back</button>

      <h2>Invoice #{invoice.id}</h2>

      <StatusBadge status={invoice.status} />

      <p>{invoice.clientName}</p>

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE",
            payload: { ...invoice, status: "paid" },
          })
        }
      >
        Mark Paid
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DELETE", payload: invoice.id });
          nav("/");
        }}
      >
        Delete
      </button>
    </div>
  );
}