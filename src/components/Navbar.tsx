import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Overview</Link>
                    </li>
                    <li>
                        <Link to="/payments">Payments</Link>
                    </li>

                    <li>
                        <Link to="/expenses">Expenses</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
