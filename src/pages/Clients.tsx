import useGetClients from "../hooks/useGetClients";
import { useBoundStore } from "../state/store";

export function Clients() {
    //button => load clients
    const store = useBoundStore();

    const { isLoading, refetch } = useGetClients();

    async function loadClients() {
        const { data } = await refetch();

        if (isLoading === true) {
            console.log("loading");
        }

        if (data) {
            store.loadClients(data);
        }
    }

    return (
        <>
            <button onClick={() => loadClients()}>Load Clients</button>

            {store.clients.length === 0
                ? "no clients yet, tap to import"
                : JSON.stringify(store.clients)}
        </>
    );
}
