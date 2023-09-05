import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Client } from "../types/Client";

export const useGetClients = () => {
    return useQuery({
        queryKey: ["clients"],
        queryFn: async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

            return data as Client;
        },

        onSuccess(data) {
            console.log(data);
        },
        onError(err) {
            console.log(err);
        },
    });
};
