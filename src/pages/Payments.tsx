import { useFilter } from "../hooks/usefilterHook";

export function Payments() {
    const transactions = useFilter("payment"); //custom hooks

    console.log(transactions);

    return (
        <>
            {transactions.map((i) => {
                return <div key={i.id}>{JSON.stringify(i)}</div>;
            })}
        </>
    );
}
