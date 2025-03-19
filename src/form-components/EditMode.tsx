import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function editEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function editName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function editStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="edit?"
                checked={edit}
                onChange={editEdit}
            />
            {edit ?
                <div>
                    <Form.Group controlId="edit-name">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={editName}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        label="student?"
                        id="is-student-check"
                        checked={student}
                        onChange={editStudent}
                    />
                </div>
            :   <div>
                    {`${name} ${student ? "is a student" : "is not a student"}.`}
                </div>
            }
        </div>
    );
}
