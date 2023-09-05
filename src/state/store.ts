import { create } from "zustand";
import createTransactionSlice, { TransactionSlice } from "./createTransactionSlice";
import createClientSlice, { ClientSlice } from "./createClientSlice";

type StoreState = TransactionSlice & ClientSlice;

export const useBoundStore = create<StoreState>((...a) => ({
    ...createTransactionSlice(...a),
    ...createClientSlice(...a),
}));
