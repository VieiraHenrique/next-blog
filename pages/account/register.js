import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Account() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { logout } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <div className="login">
            <h1 className="mb-1">Register</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <p>
                    <label htmlFor="username">
                        Choose a username
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                </p>
                <p className="mt-1">
                    <label htmlFor="email">
                        Enter your email
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </p>
                <p className="mt-1">
                    <label htmlFor="password">
                        Choose a password
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </p>
                <button className="mt-1">Register</button>
            </form>
            <p className="mt-1">
                Already registered ? <Link href={"/account/login"}>Login</Link>
            </p>
        </div>
    );
}
