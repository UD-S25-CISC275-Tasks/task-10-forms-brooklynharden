import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    //list of colors
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "pink",
        "white",
        "black",
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
                        label={
                            <span style={{ backgroundColor: col }}>{col}</span>
                        }
                        value={col}
                        checked={color === col}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setColor(event.target.value);
                        }}
                        inline
                        //style={{ color: col }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    // color:
                    //     color === "yellow" || color === "beige" ?
                    //         "black"
                    //     :   "white",
                    marginTop: "10px",
                    color: color === "white" ? "black" : "white",
                    padding: "5px",
                    textAlign: "center",
                    display: "inline-block",
                    fontWeight: "bold",
                    borderRadius: "5px",
                }}
            >
                You have chosen {color}
            </div>
        </div>
    );
}
