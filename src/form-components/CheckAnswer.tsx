import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control
                value={givenAnswer}
                onChange={(e) => {
                    setGivenAnswer(e.target.value);
                }}
            />
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
