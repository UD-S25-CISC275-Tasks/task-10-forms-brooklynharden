import React, { useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function answerMatch(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="Enter Answer">
                <FormLabel>Answer:</FormLabel>
                <FormControl
                    value={answer}
                    onChange={answerMatch}
                ></FormControl>
            </Form.Group>
            <p>{answer === expectedAnswer ? "✔️" : "❌"};</p>
        </div>
    );
}

// The CheckAnswer component allows a user to enter an answer
// to a short answer question, and then displays whether they
// got it correct or incorrect. The component takes in a parameter
// representing the expectedAnswer.

// You will need a state to handle the user’s given answer
// The user’s given answer should initially be the empty string
// When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
