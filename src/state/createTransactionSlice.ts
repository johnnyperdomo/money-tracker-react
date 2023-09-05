import { StateCreator } from "zustand";
import { Transaction } from "../types/Transaction";

export type TransactionSlice = {
    transactions: Transaction[];
    //
    // loadAllTransactions: (Transaction: Transaction[]) => void; //load all transactions in overview
    // // loadSingleTransaction: (id: string) => void; //load single transaction in view/edit
    // // loadFilteredTransactionsByType: (type: TransactionType) => void; //load transactions by type, expense or paymen
    //
    removeTransaction: (id: string) => void; //remove transaction
    //
    updateTransaction: (id: string, transaction: Transaction) => void; //update transaction
    //
    addTransaction: (transaction: Transaction) => void;
};

const createTransactionSlice: StateCreator<TransactionSlice> = (set) => ({
    transactions: [],
    // loadAllTransactions(transactions: Transaction[]) {
    //     console.log("load all transactions", transactions);

    //     set((state) => ({
    //         ...state,
    //         transactions: transactions,
    //     }));
    // },
    // loadSingleTransaction(id: string) {
    //     console.log("load single transaction", id);
    //     useLocalStorage;
    //     set((state) => ({
    //         ...state,
    //         transactions: [],
    //     }));
    // },
    // loadFilteredTransactionsByType(type: TransactionType) {
    //     //load
    //     console.log("load filtered transaction", type);

    //     set((state) => ({
    //         ...state,
    //         transactions: [],
    //     }));
    // },
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
    updateTransaction(id: string, transaction: Transaction) {
        console.log("update", id, transaction);

        //update - hook
        set((state) => ({
            ...state,
            transactions: updateTransaction(state.transactions, id, transaction),
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

function updateTransaction(transactions: Transaction[], id: string, transaction: Transaction) {
    // const findIndex = transactions.findIndex((obj) => obj.id === id);

    const newArr = transactions.map((obj) => {
        if (obj.id === id) {
            return {
                ...obj,
                itemName: transaction.itemName,
                price: transaction.price,
                type: transaction.type,
            };
        }

        return obj;
    });

    console.log(newArr);

    return newArr;
}

////////
