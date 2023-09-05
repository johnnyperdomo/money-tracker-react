import { Box, Typography, Container } from "@mui/material";
import { useFilter } from "../hooks/usefilterHook";
import { TransactionTable } from "../components/TransactionTable";

export function Payments() {
    const transactions = useFilter("payment"); //custom hooks

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 3 }}>
                <Typography variant="h3">Payments</Typography>
            </Box>

            {transactions.length === 0 ? (
                <Typography> No Payments Yet. Create a new one to get started. </Typography>
            ) : (
                <TransactionTable transactions={transactions}></TransactionTable>
            )}
        </Container>
    );
}
