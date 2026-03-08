import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "🎄" | "🎃" | "🦃" | "❤️" | "🎆";

const HolidayAlpha: Record<Holidays, Holidays> = {
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "❤️",
    "❤️": "🎄",
};

const HolidayCalender: Record<Holidays, Holidays> = {
    "❤️": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "❤️",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holidays>("❤️");

    return (
        <>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(HolidayAlpha[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    setHoliday(HolidayCalender[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </>
    );
}
