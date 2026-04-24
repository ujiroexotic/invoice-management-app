import { useInvoices } from "../../context/InvoiceContext";

export default function Filter() {
  const { dispatch } = useInvoices();

  return (
    <select onChange={(e) =>
      dispatch({ type: "FILTER", payload: e.target.value })
    }>
      <option value="all">All</option>
      <option value="draft">Draft</option>
      <option value="pending">Pending</option>
      <option value="paid">Paid</option>
    </select>
  );
}