import { Link } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";

export default function InvoiceCard({ invoice }) {
  return (
    <Link to={`/invoice/${invoice.id}`} className="card">
      <div>
        <h3>#{invoice.id.slice(0, 6)}</h3>
        <StatusBadge status={invoice.status} />
      </div>

      <p>{invoice.clientName}</p>
      <p>${invoice.total}</p>
    </Link>
  );
}