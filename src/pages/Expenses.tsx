import { useFilter } from "../hooks/usefilterHook";

export function Expenses() {
    const transactions = useFilter("expense"); //custom hooks

    console.log(transactions);

    return (
        <>
            {transactions.map((i) => {
                return <div key={i.id}>{JSON.stringify(i)}</div>;
            })}
        </>
    );
}
