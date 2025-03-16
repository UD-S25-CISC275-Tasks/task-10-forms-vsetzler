import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "cyan",
    "magenta",
    "black",
    "white",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.name);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((clr: string) => (
                <Form.Check
                    type="radio"
                    key={clr}
                    id={clr}
                    name={clr}
                    label={clr}
                    onChange={updateColor}
                    checked={color === clr}
                ></Form.Check>
            ))}

            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                on
            </div>
        </div>
    );
}
