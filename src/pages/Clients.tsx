import { Box, Button, Container, Typography } from "@mui/material";
import useGetClients from "../hooks/useGetClients";
import { useBoundStore } from "../state/store";
import { ClientTable } from "../components/ClientTable";

export function Clients() {
    //button => load clients
    const store = useBoundStore();

    const { isLoading, refetch } = useGetClients();

    async function loadClients() {
        const { data } = await refetch();

        if (isLoading === true) {
            console.log("loading");
        }

        if (data) {
            store.loadClients(data);
        }
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 3 }}>
                <Typography variant="h3">Clients</Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
                {store.clients.length === 0 ? (
                    <Box>
                        <Typography> No Clients Yet. Import from backup. </Typography>

                        <Button
                            onClick={() => loadClients()}
                            sx={{ my: 2, backgroundColor: "dodgerblue", color: "white" }}
                            size="large">
                            Import Clients
                        </Button>
                    </Box>
                ) : (
                    <ClientTable clients={store.clients}></ClientTable>
                )}
            </Box>
        </Container>
    );
}
