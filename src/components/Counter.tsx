import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <h2>Count: {value}</h2>
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>{" "}
            <Button
                onClick={() => {
                    setValue(value - 1);
                }}
            >
                Substract One
            </Button>{" "}
            <Button
                onClick={() => {
                    setValue(0);
                }}
            >
                Reset
            </Button>
        </div>
    );
}
