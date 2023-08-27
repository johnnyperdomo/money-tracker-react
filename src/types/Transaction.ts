import { TransactionType } from "./TransactionType";

export type Transaction = {
    itemName: string;
    price: number;
    type: TransactionType;
    id: string;
    date: string; //Date().now to string
};
