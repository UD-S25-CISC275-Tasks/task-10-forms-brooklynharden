import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [left, setdiceLEFT] = useState<number>(6);
    let [right, setdiceRIGHT] = useState<number>(4);
    return (
        <div>
            <span data-testid="left-die">{left} </span>
            <span data-testid="right-die">{right}</span>
            <Button
                onClick={() => {
                    setdiceLEFT(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setdiceRIGHT(d6());
                }}
            >
                Roll Right
            </Button>
            {left === right && right === 1 ?
                <span>Lose</span>
            : left === right && right !== 1 ?
                <span>Win </span>
            :   <span>Try Again</span>}
        </div>
    );
}
