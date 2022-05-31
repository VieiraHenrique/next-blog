import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter();

    const login = async ({ username, password }) => {
        setUser(true);
        router.push("/");
        console.log(username, password);
    };

    const logout = async () => {
        setUser(false);
        router.push("/");
        console.log(user)
    };

    const register = async () => {
        console.log("register");
    };

    const authValues = {
        user,
        error,
        login,
        logout,
        register,
    };

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
}
