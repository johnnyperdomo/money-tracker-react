import { useEffect } from "react";
import { useTransactionFinder } from "../hooks/useTransactionFinder";
import { useParams } from "react-router-dom";
import { Card, CardActions, CardContent, Chip, Container, Typography } from "@mui/material";

export function Transaction() {
    const [transaction, setTransaction] = useTransactionFinder(); //custom hooks
    const params = useParams();

    useEffect(() => {
        if (params.transactionId) {
            setTransaction(params.transactionId);
        } else {
            setTransaction("");
        }

        return () => {
            setTransaction("");
        };
    }, [params, setTransaction]);

    return (
        <Container maxWidth="sm">
            <Card sx={{ minWidth: 275, my: 3 }}>
                <CardContent>
                    <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
                        Transaction Type
                    </Typography>
                    <Typography variant="h5" component="div">
                        <Chip label={transaction?.type}></Chip>
                    </Typography>
                    <Typography sx={{ my: 1.5, fontSize: 14 }} color="text.secondary">
                        Item Name
                    </Typography>
                    <Typography variant="body2">{transaction?.itemName}</Typography>
                    <Typography sx={{ my: 1.5, fontSize: 14 }} color="text.secondary">
                        Item Price
                    </Typography>
                    <Typography variant="body2">${transaction?.price}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
