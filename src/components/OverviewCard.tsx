import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useBoundStore } from "../state/store";
import { useFilter } from "../hooks/usefilterHook";

type OverviewProps = {
    text: string;
    category: "all" | "expenses" | "payments" | "clients";
};

export function OverviewCard({ text, category }: OverviewProps) {
    const [count, setCount] = useState(0);
    const store = useBoundStore();
    const filteredExpenses = useFilter("expense");
    const filteredPayments = useFilter("payment");

    useEffect(() => {
        switch (category) {
            case "all":
                setCount(store.transactions.length);
                break;

            case "expenses":
                setCount(filteredExpenses.length);
                break;

            case "payments":
                setCount(filteredPayments.length);
                break;

            case "clients":
                setCount(store.clients.length);
                break;
        }

        return () => {
            setCount(0);
        };
    }, [
        category,
        filteredExpenses.length,
        filteredPayments.length,
        store.clients.length,
        store.transactions.length,
    ]);

    return (
        <Card>
            <CardContent>
                <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14, my: 1.5 }}>
                    {text}
                </Typography>

                <Typography variant="body2">{count}</Typography>
            </CardContent>
        </Card>
    );
}
