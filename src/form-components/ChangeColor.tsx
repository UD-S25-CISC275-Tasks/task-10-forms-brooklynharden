import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    //list of colors
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
    ];

    const [color, setColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((col) => (
                    <Form.Check
                        key={col}
                        type="radio"
                        name="colorOptions"
                        label={col}
                        value={col}
                        checked={color === col}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setColor(event.target.value);
                        }}
                        inline
                        style={{ color: col }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                }}
            >
                {color}
            </div>
        </div>
    );
}
