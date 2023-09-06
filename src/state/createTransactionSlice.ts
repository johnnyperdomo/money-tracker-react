import { StateCreator } from "zustand";
import { Transaction } from "../types/Transaction";

export type TransactionSlice = {
    transactions: Transaction[];
    removeTransaction: (id: string) => void; //remove transaction
    addTransaction: (transaction: Transaction) => void;
};

const createTransactionSlice: StateCreator<TransactionSlice> = (set) => ({
    transactions: [],
    removeTransaction(id: string) {
        console.log("remove", id);

        //remove
        set((state) => ({
            ...state,
            transactions: removeTransaction(state.transactions, id),
        }));
    },
    addTransaction(transaction: Transaction) {
        //add - hook
        console.log("add transaction in store", transaction);
        set((state) => ({
            ...state,
            transactions: addTransaction(state.transactions, transaction),
        }));
    },
});

export default createTransactionSlice;

////////////////

const addTransaction = (transactions: Transaction[], transaction: Transaction): Transaction[] => [
    ...transactions,
    transaction,
];

const removeTransaction = (transactions: Transaction[], id: string): Transaction[] =>
    transactions.filter((trans) => trans.id !== id);

////////
