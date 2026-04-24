// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import InvoiceDetail from "./pages/InvoiceDetail";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/invoice/:id" element={<InvoiceDetail />} />
//     </Routes>
//   );
// }

// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import InvoiceForm from "./components/invoice/InvoiceForm";
import InvoiceDetail from "./pages/InvoiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="/new" element={<InvoiceForm />} />
      </Routes>
    </Router>
  );
}

export default App;
