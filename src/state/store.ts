import { create } from "zustand";
import createTransactionSlice, { TransactionSlice } from "./createTransactionSlice";

type StoreState = TransactionSlice;

export const useBoundStore = create<StoreState>((...a) => ({
    ...createTransactionSlice(...a),
}));
