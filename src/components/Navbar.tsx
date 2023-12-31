import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
    { name: "Overview", route: "/" },
    { name: "Payments", route: "/payments" },
    { name: "Expenses", route: "/expenses" },
    { name: "Clients", route: "/clients" },
];

export function Navbar() {
    const navigate = useNavigate();

    function navigateToRoute(route: string) {
        navigate(route);
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.route}
                                onClick={() => navigateToRoute(page.route)}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "flex",
                                }}>
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Button
                            onClick={() => navigateToRoute("/transaction/new")}
                            sx={{
                                my: 2,
                                color: "white",
                                backgroundColor: "black",
                                display: "flex",
                                px: 2,
                            }}>
                            Add Transaction
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
