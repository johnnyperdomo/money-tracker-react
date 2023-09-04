//loads a single transaction by id

import { useState } from "react";
import { Transaction } from "../types/Transaction";
import useTransactionStore from "../state/store";

export function useTransactionFinder() {
    const [transaction, setTransaction] = useState<Transaction>();
    const store = useTransactionStore();

    function findTransaction(id: string) {
        const transactions = store.transactions;

        const findTransactionById = transactions.filter((obj) => obj.id === id);

        setTransaction(findTransactionById[0]); //finds the first element
    }

    return [transaction, findTransaction] as const;
}
