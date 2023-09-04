import { useEffect } from "react";
import { useTransactionFinder } from "../hooks/useTransactionFinder";
import { useParams } from "react-router-dom";

export function Transaction() {
    const [transaction, setTransaction] = useTransactionFinder(); //custom hooks
    const params = useParams();

    useEffect(() => {
        if (params.transactionId) {
            setTransaction(params.transactionId);
        } else {
            setTransaction("");
        }

        return () => {
            setTransaction("");
        };
    }, [params, setTransaction]);

    return (
        <>
            <div>{JSON.stringify(transaction)}</div>
        </>
    );
}
