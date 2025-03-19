import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(3); //The initial number of attempts left should be 3.
    const [requestAmount, setRequest] = useState<string>("");

    function requestChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    //decrease attempt
    function useAttempt() {
        if (attempt > 0) {
            setAttempt(attempt - 1);
        }
    }

    //gain attwmpt
    function gainAttempt() {
        const num = parseInt(requestAmount, 10);
        if (!isNaN(num) && num > 0) {
            setAttempt(attempt + num);
        }
        setRequest("");
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempt}</div>
            <Form.Group controlId="attempts">
                <Form.Control
                    type="number"
                    value={requestAmount}
                    onChange={requestChange}
                ></Form.Control>
            </Form.Group>

            <Button onClick={useAttempt} disabled={attempt === 0}>
                Use
            </Button>
            <Button onClick={gainAttempt}>Gain</Button>
        </div>
    );
}

// const [request, setRequest] = useState<number>(0);
