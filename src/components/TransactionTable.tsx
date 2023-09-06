import {
    Button,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Transaction } from "../types/Transaction";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useBoundStore } from "../state/store";

type TableType = {
    transactions: Transaction[];
};

export function TransactionTable({ transactions }: TableType) {
    const navigate = useNavigate();
    const store = useBoundStore();

    function navigateToRoute(route: string) {
        navigate(route);
    }

    function removeTransaction(id: string) {
        console.log("transaction removed: ", id);
        store.removeTransaction(id);
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell colSpan={3}>Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((item) => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.itemName}</TableCell>
                                <TableCell>${item.price}</TableCell>
                                <TableCell>
                                    <Chip label={item.type} />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() =>
                                            navigateToRoute(`/transaction/view/${item.id}`)
                                        }
                                        sx={{ backgroundColor: "dodgerblue", color: "white" }}>
                                        View
                                    </Button>
                                </TableCell>
                                <TableCell size="medium" align="right">
                                    <Button onClick={() => removeTransaction(item.id)}>
                                        <DeleteForeverIcon
                                            sx={{
                                                color: "lightcoral",
                                            }}
                                        />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
