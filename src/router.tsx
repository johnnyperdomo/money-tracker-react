import { createBrowserRouter } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { Expenses } from "./pages/Expenses";
import { Payments } from "./pages/Payments";
import { Transaction } from "./pages/Transaction";
import { NavLayout } from "./components/NavLayout";
import { TransactionEdit } from "./pages/Transaction-Edit";
import { Clients } from "./pages/Clients";

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        errorElement: <h1>Error</h1>,
        children: [
            { path: "/", element: <Overview /> },
            {
                path: "/expenses",
                element: <Expenses />,
            },
            {
                path: "/payments",
                element: <Payments />,
            },
            {
                path: "/clients",
                element: <Clients />,
            },
            { path: "/transaction/view/:transactionId", element: <Transaction /> },
            { path: "/transaction/new", element: <TransactionEdit /> },
            { path: "/transaction/edit/:transactionId", element: <TransactionEdit /> },
        ],
    },
]);
