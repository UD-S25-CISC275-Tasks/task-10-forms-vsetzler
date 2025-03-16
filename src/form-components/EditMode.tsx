import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [userName, ChangeName] = useState<string>("Your Name");
    const [editMode, ChangeMode] = useState<boolean>(false);
    const [isStudent, ChangeStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        ChangeName(event.target.value);
    }

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        ChangeMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        ChangeStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Switch
                    type="switch"
                    id="isEditCheck"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateMode}
                />

                <Form.Check
                    type="checkbox"
                    id="isStudentCheck"
                    label="Is a Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                    hidden={!editMode}
                />

                <Form.Control
                    value={userName}
                    onChange={updateName}
                    hidden={!editMode}
                />

                {isStudent ?
                    `${userName} is a student`
                :   `${userName} is not a student`}
            </Form.Group>
        </div>
    );
}
