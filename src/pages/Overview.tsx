import transactionStore from "../state/store";
import { Transaction } from "../types/Transaction";

export function Overview() {
    const store = transactionStore();

    function addTransaction() {
        const newTransaction: Transaction = {
            itemName: "pogostick ",
            id: crypto.randomUUID(),
            date: Date.now().toString(),
            price: 14,
            type: "expense",
        };

        store.addTransaction(newTransaction);
        console.log(store.transactions);
    }

    function updateTransaction() {
        //TODO: get already properties that are there
        const newTransaction: Transaction = {
            itemName: "service repair",
            id: crypto.randomUUID(), //TODO: get already id
            date: Date.now().toString(),
            price: 1443,
            type: "payment",
        };

        store.updateTransaction("3", newTransaction);
    }

    return (
        <>
            <h1>Overview</h1>

            <button onClick={() => store.removeTransaction("123")}>remove</button>
            <button onClick={() => updateTransaction()}>update</button>
            <button onClick={() => addTransaction()}>add transaction</button>

            <h3>Transactions</h3>

            {store.transactions.map((i) => {
                return <div key={i.id}>{i.itemName}</div>;
            })}
        </>
    );
}
