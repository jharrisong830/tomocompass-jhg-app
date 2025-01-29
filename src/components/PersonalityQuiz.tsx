import { Form, Button } from "react-bootstrap";

import { Attribute } from "../lib/personality";

export default function PersonalityQuiz({
    movement,
    setMovement,
    speech,
    setSpeech,
    expressiveness,
    setExpressiveness,
    attitude,
    setAttitude
}: {
    movement: number | null;
    setMovement: (value: number) => void;
    speech: number | null;
    setSpeech: (value: number) => void;
    expressiveness: number | null;
    setExpressiveness: (value: number) => void;
    attitude: number | null;
    setAttitude: (value: number) => void;
}) {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ movement, speech, expressiveness, attitude });
    };

    const onValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        valueType: Attribute
    ) => {
        const value = parseInt(e.target.value);
        switch (valueType) {
            case "movement":
                setMovement(value);
                break;
            case "speech":
                setSpeech(value);
                break;
            case "expressiveness":
                setExpressiveness(value);
                break;
            case "attitude":
                setAttitude(value);
                break;
        }
    };

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group id="movement">
                <Form.Label>Movement</Form.Label>
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 0}
                    value={0}
                    label="Slow"
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 1}
                    value={1}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 2}
                    value={2}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 3}
                    value={3}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 4}
                    value={4}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 5}
                    value={5}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 6}
                    value={6}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="movement"
                    onChange={(e) => onValueChange(e, "movement")}
                    checked={movement === 7}
                    value={7}
                    label="Fast"
                />
            </Form.Group>

            <Form.Group id="speech">
                <Form.Label>Speech</Form.Label>
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 0}
                    value={0}
                    label="Polite"
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 1}
                    value={1}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 2}
                    value={2}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 3}
                    value={3}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 5}
                    value={5}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 6}
                    value={6}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 7}
                    value={7}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="speech"
                    onChange={(e) => onValueChange(e, "speech")}
                    checked={speech === 8}
                    value={8}
                    label="Direct"
                />
            </Form.Group>

            <Form.Group id="expressiveness">
                <Form.Label>Expressiveness</Form.Label>
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 0}
                    value={0}
                    label="Flat"
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 1}
                    value={1}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 2}
                    value={2}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 3}
                    value={3}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 4}
                    value={4}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 5}
                    value={5}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 6}
                    value={6}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="expressiveness"
                    onChange={(e) => onValueChange(e, "expressiveness")}
                    checked={expressiveness === 7}
                    value={7}
                    label="Varied"
                />
            </Form.Group>

            <Form.Group id="attitude">
                <Form.Label>Attitude</Form.Label>
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 0}
                    value={0}
                    label="Serious"
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 1}
                    value={1}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 2}
                    value={2}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 3}
                    value={3}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 5}
                    value={5}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 6}
                    value={6}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 7}
                    value={7}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="attitude"
                    onChange={(e) => onValueChange(e, "attitude")}
                    checked={attitude === 8}
                    value={8}
                    label="Relaxed"
                />
            </Form.Group>

            <Button
                type="submit"
                variant="success"
                disabled={
                    movement === null ||
                    speech === null ||
                    expressiveness === null ||
                    attitude === null
                }
            >
                Submit
            </Button>
        </Form>
    );
}
