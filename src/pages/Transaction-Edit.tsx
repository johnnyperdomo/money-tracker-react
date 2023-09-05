import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Transaction } from "../types/Transaction";
import { TransactionType } from "../types/TransactionType";
import { useBoundStore } from "../state/store";

type Inputs = {
    itemName: string;
    price: number;
};

export function TransactionEdit() {
    const [transactionType, setTransactionType] = useState<TransactionType>("expense");
    const store = useBoundStore();

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

        console.log(store.transactions);

        //TODO: route to newID
    };

    const handleToggleChange = (event: React.MouseEvent<HTMLElement>, newType: TransactionType) => {
        setTransactionType(newType);
    };

    return (
        <>
            <h1>Overview</h1>

            <h3>Select Transaction Type</h3>
            <ToggleButtonGroup
                color="primary"
                value={transactionType}
                exclusive
                onChange={handleToggleChange}
                aria-label="Platform">
                <ToggleButton value="expense">Expense</ToggleButton>
                <ToggleButton value="payment">Payment</ToggleButton>
            </ToggleButtonGroup>

            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("itemName", { required: true })}
                    type="text"
                    placeholder="Gas"
                />

                <input
                    {...register("price", {
                        required: true,
                    })}
                    type="number"
                    placeholder="123"
                />
                <input type="submit" />
            </form>
        </>
    );
}
