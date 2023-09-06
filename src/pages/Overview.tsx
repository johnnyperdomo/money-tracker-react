import { Box, Container, Typography } from "@mui/material";
import { Transaction } from "../types/Transaction";
import { useBoundStore } from "../state/store";
import { TransactionTable } from "../components/TransactionTable";

export function Overview() {
    const store = useBoundStore();

    function addTransaction() {
        const newTransaction: Transaction = {
            itemName: "pogostick ",
            id: crypto.randomUUID(),
            date: Date.now().toString(),
            price: 14,
            type: "expense",
        };

        store.addTransaction(newTransaction);
        console.log(store.transactions);
    }

    function updateTransaction() {
        //TODO: get already properties that are there
        const newTransaction: Transaction = {
            itemName: "service repair",
            id: crypto.randomUUID(), //TODO: get already id
            date: Date.now().toString(),
            price: 1443,
            type: "payment",
        };
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 3 }}>
                <Typography variant="h3">Overview</Typography>
            </Box>

            <Box>{/* Have cards here */}</Box>

            <button onClick={() => store.removeTransaction("123")}>remove</button>
            <button onClick={() => updateTransaction()}>update</button>
            <button onClick={() => addTransaction()}>add transaction</button>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Transactions
                </Typography>
                {store.transactions.length === 0 ? (
                    <Typography> No Transactions Yet. Create a new one to get started. </Typography>
                ) : (
                    <TransactionTable transactions={store.transactions}></TransactionTable>
                )}
            </Box>
        </Container>
    );
}
