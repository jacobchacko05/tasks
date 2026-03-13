import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [amount, setAmount] = useState<string>("");

    function useAttempt() {
        setAttempts(attempts - 1);
    }

    function gainAttempts() {
        const parsed = parseInt(amount);
        if (!isNaN(parsed)) {
            setAttempts(attempts + parsed);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <p>{attempts}</p>

            <input
                type="number"
                value={amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
            />

            <button onClick={useAttempt} disabled={attempts === 0}>
                use
            </button>

            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
