import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, changeAttempts] = useState<string>("3");
    const [requestedAttempts, RequestAttempts] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            RequestAttempts(event.target.value);
        } else {
            RequestAttempts(NaN.toString());
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formChangeAttempts">
                    <Form.Label></Form.Label>
                    <Form.Control
                        role="spinbutton"
                        type="number"
                        value={requestedAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            updateRequest(event);
                        }}
                    />
                </Form.Group>
            </div>

            <div>
                <Button
                    role="button"
                    name="gain"
                    onClick={() => {
                        !isNaN(parseInt(requestedAttempts)) ?
                            changeAttempts(
                                (
                                    parseInt(attempts) +
                                    parseInt(requestedAttempts)
                                ).toString(),
                            )
                        :   changeAttempts(attempts);
                    }}
                >
                    gain
                </Button>
            </div>
            <div>
                <Button
                    role="button"
                    name="use"
                    onClick={() => {
                        changeAttempts((parseInt(attempts) - 1).toString());
                    }}
                    disabled={parseInt(attempts) <= 0}
                >
                    use
                </Button>
            </div>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
