import { useEffect, useState } from "react";
import { TransactionType } from "../types/TransactionType";
import { Transaction } from "../types/Transaction";
import { useBoundStore } from "../state/store";

export function useFilter(type: TransactionType) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const store = useBoundStore();

    useEffect(() => {
        const transactions = store.transactions;
        const filteredExpenses = transactions.filter((obj) => obj.type === "expense");
        const filteredPayments = transactions.filter((obj) => obj.type === "payment");

        switch (type) {
            case "expense":
                setTransactions(filteredExpenses);
                break;

            case "payment":
                setTransactions(filteredPayments);
                break;
        }

        return () => {
            setTransactions([]);
        };
    }, [type, store.transactions]);

    return transactions;
}
