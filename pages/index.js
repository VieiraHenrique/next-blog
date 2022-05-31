import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
    const { user } = useContext(AuthContext);

    return (
        <div className="Home">
            <h1>Welcome to myBlog</h1>
            {user ? (
                <>
                    <p>Here are the articles</p>
                </>
            ) : (
                <>
                    <p>
                        In order to see the content, please <Link href={"/account/login"}>login</Link>
                    </p>
                </>
            )}
        </div>
    );
}
