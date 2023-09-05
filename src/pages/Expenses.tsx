import { Box, Container, Typography } from "@mui/material";
import { useFilter } from "../hooks/usefilterHook";
import { TransactionTable } from "../components/TransactionTable";

export function Expenses() {
    const transactions = useFilter("expense"); //custom hooks

    console.log(transactions);

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 3 }}>
                <Typography variant="h3">Expenses</Typography>
            </Box>

            {transactions.length === 0 ? (
                <Typography> No Expenses Yet. Create a new one to get started. </Typography>
            ) : (
                <TransactionTable transactions={transactions}></TransactionTable>
            )}
        </Container>
    );
}
