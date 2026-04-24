import { createContext, useContext, useEffect, useReducer } from "react";

const InvoiceContext = createContext();

const initialState = {
  invoices: [],
  filter: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { ...state, invoices: action.payload };

    case "ADD":
      return { ...state, invoices: [...state.invoices, action.payload] };

    case "UPDATE":
      return {
        ...state,
        invoices: state.invoices.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };

    case "DELETE":
      return {
        ...state,
        invoices: state.invoices.filter((i) => i.id !== action.payload),
      };

    case "FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}

export function InvoiceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("invoices")) || [];
    dispatch({ type: "INIT", payload: data });
  }, []);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(state.invoices));
  }, [state.invoices]);

  return (
    <InvoiceContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoices = () => useContext(InvoiceContext);