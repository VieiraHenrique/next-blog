import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Account() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({username, password});
    };

    return (
        <div className="login">
            <h1 className="mb-1">Login</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <p>
                    <label htmlFor="username">
                        Username
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                </p>
                <p className="mt-1">
                    <label htmlFor="password">
                        Password
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </p>
                <button className="mt-1">Login</button>
            </form>
            <p className="mt-1">
                Not registered yet ? <Link href={"/account/register"}>Register</Link>
            </p>
        </div>
    );
}
