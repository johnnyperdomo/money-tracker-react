import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Client } from "../types/Client";

function useGetClients() {
    return useQuery({
        queryKey: ["clients"],
        enabled: false, //so it doesn't autorun when initializing
        queryFn: async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

            return data as Client[];
        },
    });
}

export default useGetClients;
