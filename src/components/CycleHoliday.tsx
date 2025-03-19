import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Holiday: 🎆"
        | "Holiday: 🐰"
        | "Holiday: 🎃"
        | "Holiday: 🦃"
        | "Holiday: 🎄";

    const Holiday_time_tranistion: Record<Holiday, Holiday> = {
        "Holiday: 🎆": "Holiday: 🐰",
        "Holiday: 🐰": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🎆",
    };

    const HOLIDAY_ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
        "Holiday: 🎆": "Holiday: 🎃", // New Year's -> Halloween
        "Holiday: 🎃": "Holiday: 🎄", // Halloween -> Christmas
        "Holiday: 🎄": "Holiday: 🐰", // Christmas -> Easter
        "Holiday: 🐰": "Holiday: 🦃", // Easter -> Thanksgiving
        "Holiday: 🦃": "Holiday: 🎆", // Thanksgiving -> New Year's
    };

    const [holiday, setHoliday] = useState<Holiday>("Holiday: 🎆"); // Start with New Year's

    function advanceAlphabetically(): void {
        setHoliday(HOLIDAY_ALPHABET_TRANSITIONS[holiday]);
    }

    function advanceByYear(): void {
        setHoliday(Holiday_time_tranistion[holiday]);
    }

    return (
        <div>
            <span>{holiday}</span>
            <Button onClick={advanceAlphabetically}>Advance By Alphabet</Button>
            <Button onClick={advanceByYear}>Advance By Year</Button>
        </div>
    );
}
