import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Transaction } from "../types/Transaction";
import { TransactionType } from "../types/TransactionType";
import { useBoundStore } from "../state/store";
import { useNavigate } from "react-router-dom";

type Inputs = {
    itemName: string;
    price: number;
};

export function TransactionEdit() {
    const [transactionType, setTransactionType] = useState<TransactionType>("expense");
    const store = useBoundStore();
    const navigate = useNavigate();

    function navigateToRoute(route: string) {
        navigate(route);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const newTransaction: Transaction = {
            id: crypto.randomUUID(),
            itemName: data.itemName,
            price: data.price,
            date: Date.now().toString(),
            type: transactionType,
        };

        store.addTransaction(newTransaction);

        navigateToRoute(`/transaction/view/${newTransaction.id}`);
    };

    const handleToggleChange = (event: React.MouseEvent<HTMLElement>, newType: TransactionType) => {
        setTransactionType(newType);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 3 }}>
                <Typography variant="h3">Add Transaction</Typography>
            </Box>
            <Box sx={{ my: 3 }}>
                <Typography sx={{ mb: 1 }}>Choose Transaction Type</Typography>

                <ToggleButtonGroup
                    color="primary"
                    value={transactionType}
                    exclusive
                    onChange={handleToggleChange}
                    aria-label="Platform">
                    <ToggleButton value="expense">Expense</ToggleButton>
                    <ToggleButton value="payment">Payment</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel>Enter Transaction Name</InputLabel>

                <OutlinedInput
                    {...register("itemName", { required: true })}
                    type="text"
                    placeholder="Car Cas"
                    size="small"
                />
                <br />

                <InputLabel sx={{ mt: 3 }}>Enter Price</InputLabel>

                <OutlinedInput
                    {...register("price", {
                        required: true,
                    })}
                    type="number"
                    placeholder="45"
                    size="small"
                />

                <br />

                <Button
                    type="submit"
                    size="large"
                    sx={{ mt: 3, color: "white", backgroundColor: "dodgerblue" }}>
                    Add Transaction
                </Button>
            </form>
        </Container>
    );
}
