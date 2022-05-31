import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Layout({ children }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="Layout">
            <header className="header mb-2">
                <div className="wrapper">
                    <Link href={"/"}>
                        <a className="logo">myBlog</a>
                    </Link>
                    <ul className="nav">
                        <li>
                            <Link href={"/about"}>
                                <a>About</a>
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <a onClick={() => logout()}>Logout</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href={"/account/login"}>
                                        <a>Login</a>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </header>

            <main className="main">
                <div className="wrapper">{children}</div>
            </main>

            <footer className="footer mt-2">
                <div className="wrapper">
                    <p>@Copyright 2022.</p>
                </div>
            </footer>
        </div>
    );
}
