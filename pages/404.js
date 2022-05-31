import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function FourOFour() {
    const [seconds, setSeconds] = useState(5);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1);
        }, 1000);

        if (seconds === 0) {
            router.push("/");
        }
    }, [seconds, , router]);

    return (
        <div className="FourOFour">
            <h1>404</h1>
            <h2>Oups... nothing to see here</h2>
            <p className="red mt-1">You will be redirected to the home page in {seconds}</p>
        </div>
    );
}
