import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Filter from "../components/ui/Filter";
import InvoiceCard from "../components/invoice/InvoiceCard";
import { useInvoices } from "../context/InvoiceContext";

export default function Home() {
  const { state } = useInvoices();

  const filtered = state.invoices.filter((i) =>
    state.filter === "all" ? true : i.status === state.filter
  );

  return (
    <div className="layout">
      <Sidebar />

      <main style={{ width: "100%" }}>
        <Header />
        <Filter />

        {filtered.length === 0 ? (
          <p>No invoices</p>
        ) : (
          filtered.map((inv) => (
            <InvoiceCard key={inv.id} invoice={inv} />
          ))
        )}
      </main>
    </div>
  );
}