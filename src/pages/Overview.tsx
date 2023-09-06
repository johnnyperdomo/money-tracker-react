import { Box, Container, Grid, Typography } from "@mui/material";
import { useBoundStore } from "../state/store";
import { TransactionTable } from "../components/TransactionTable";
import { OverviewCard } from "../components/OverviewCard";

export function Overview() {
    const store = useBoundStore();

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 3 }}>
                <Typography variant="h3">Overview</Typography>
            </Box>

            <Box sx={{ my: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <OverviewCard text="All Transactions" category="all" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <OverviewCard text="Payments" category="payments" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <OverviewCard text="Expenses" category="expenses" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <OverviewCard text="Clients" category="clients" />
                    </Grid>
                </Grid>
            </Box>

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
