import { StateCreator } from "zustand";
import { Client } from "../types/Client";

export type ClientSlice = {
    clients: Client[];
    loadClients: (Clients: Client[]) => void;
};

const createClientSlice: StateCreator<ClientSlice> = (set) => ({
    clients: [],
    loadClients: (clients: Client[]) => {
        console.log(clients);
        set((state) => ({
            ...state,
            clients: clients,
        }));
    },
});

export default createClientSlice;
