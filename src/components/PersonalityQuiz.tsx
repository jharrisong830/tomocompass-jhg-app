import { Button } from "react-bootstrap";

import { Attribute } from "../lib/personality";

export default function PersonalityQuiz({
    movement,
    setMovement,
    speech,
    setSpeech,
    expressiveness,
    setExpressiveness,
    attitude,
    setAttitude,
    onSubmit
}: {
    movement: number | null;
    setMovement: (value: number) => void;
    speech: number | null;
    setSpeech: (value: number) => void;
    expressiveness: number | null;
    setExpressiveness: (value: number) => void;
    attitude: number | null;
    setAttitude: (value: number) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
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
        <div className="container py-5 text-center">
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="row py-2" id="movement">
                    <label className="col-12">Movement</label>
                    <p className="col-2">Slow</p>
                    <input
                        id="movement0"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 0}
                        value={0}
                    />
                    <label className="col" htmlFor="movement0">
                        <div></div>
                    </label>

                    <input
                        id="movement1"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 1}
                        value={1}
                    />
                    <label className="col" htmlFor="movement1">
                        <div></div>
                    </label>

                    <input
                        id="movement2"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 2}
                        value={2}
                    />
                    <label className="col" htmlFor="movement2">
                        <div></div>
                    </label>

                    <input
                        id="movement3"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 3}
                        value={3}
                    />
                    <label className="col" htmlFor="movement3">
                        <div></div>
                    </label>

                    <input
                        id="movement4"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 4}
                        value={4}
                    />
                    <label className="col" htmlFor="movement4">
                        <div></div>
                    </label>

                    <input
                        id="movement5"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 5}
                        value={5}
                    />
                    <label className="col" htmlFor="movement5">
                        <div></div>
                    </label>

                    <input
                        id="movement6"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 6}
                        value={6}
                    />
                    <label className="col" htmlFor="movement6">
                        <div></div>
                    </label>

                    <input
                        id="movement7"
                        type="radio"
                        name="movement"
                        onChange={(e) => onValueChange(e, "movement")}
                        checked={movement === 7}
                        value={7}
                    />
                    <label className="col" htmlFor="movement7">
                        <div></div>
                    </label>

                    <p className="col-2">Fast</p>
                </div>

                <div className="row" id="speech">
                    <label className="col-12">Speech</label>
                    <p className="col-2">Polite</p>
                    <input
                        id="speech0"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 0}
                        value={0}
                    />
                    <label className="col" htmlFor="speech0">
                        <div></div>
                    </label>

                    <input
                        id="speech1"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 1}
                        value={1}
                    />
                    <label className="col" htmlFor="speech1">
                        <div></div>
                    </label>

                    <input
                        id="speech2"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 2}
                        value={2}
                    />
                    <label className="col" htmlFor="speech2">
                        <div></div>
                    </label>

                    <input
                        id="speech3"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 3}
                        value={3}
                    />
                    <label className="col" htmlFor="speech3">
                        <div></div>
                    </label>

                    <input
                        id="speech5"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 5}
                        value={5}
                    />
                    <label className="col" htmlFor="speech5">
                        <div></div>
                    </label>

                    <input
                        id="speech6"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 6}
                        value={6}
                    />
                    <label className="col" htmlFor="speech6">
                        <div></div>
                    </label>

                    <input
                        id="speech7"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 7}
                        value={7}
                    />
                    <label className="col" htmlFor="speech7">
                        <div></div>
                    </label>

                    <input
                        id="speech8"
                        type="radio"
                        name="speech"
                        onChange={(e) => onValueChange(e, "speech")}
                        checked={speech === 8}
                        value={8}
                    />
                    <label className="col" htmlFor="speech8">
                        <div></div>
                    </label>

                    <p className="col-2">Direct</p>
                </div>

                <div className="row" id="expressiveness">
                    <label className="col-12">Expressiveness</label>
                    <p className="col-2">Flat</p>
                    <input
                        id="expressiveness0"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 0}
                        value={0}
                    />
                    <label className="col" htmlFor="expressiveness0">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness1"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 1}
                        value={1}
                    />
                    <label className="col" htmlFor="expressiveness1">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness2"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 2}
                        value={2}
                    />
                    <label className="col" htmlFor="expressiveness2">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness3"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 3}
                        value={3}
                    />
                    <label className="col" htmlFor="expressiveness3">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness4"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 4}
                        value={4}
                    />
                    <label className="col" htmlFor="expressiveness4">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness5"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 5}
                        value={5}
                    />
                    <label className="col" htmlFor="expressiveness5">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness6"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 6}
                        value={6}
                    />
                    <label className="col" htmlFor="expressiveness6">
                        <div></div>
                    </label>

                    <input
                        id="expressiveness7"
                        type="radio"
                        name="expressiveness"
                        onChange={(e) => onValueChange(e, "expressiveness")}
                        checked={expressiveness === 7}
                        value={7}
                    />
                    <label className="col" htmlFor="expressiveness7">
                        <div></div>
                    </label>

                    <p className="col-2">Varied</p>
                </div>

                <div className="row" id="attitude">
                    <label className="col-12">Attitude</label>
                    <p className="col-2">Serious</p>
                    <input
                        id="attitude0"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 0}
                        value={0}
                    />
                    <label className="col" htmlFor="attitude0">
                        <div></div>
                    </label>

                    <input
                        id="attitude1"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 1}
                        value={1}
                    />
                    <label className="col" htmlFor="attitude1">
                        <div></div>
                    </label>

                    <input
                        id="attitude2"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 2}
                        value={2}
                    />
                    <label className="col" htmlFor="attitude2">
                        <div></div>
                    </label>

                    <input
                        id="attitude3"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 3}
                        value={3}
                    />
                    <label className="col" htmlFor="attitude3">
                        <div></div>
                    </label>

                    <input
                        id="attitude5"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 5}
                        value={5}
                    />
                    <label className="col" htmlFor="attitude5">
                        <div></div>
                    </label>

                    <input
                        id="attitude6"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 6}
                        value={6}
                    />
                    <label className="col" htmlFor="attitude6">
                        <div></div>
                    </label>

                    <input
                        id="attitude7"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 7}
                        value={7}
                    />
                    <label className="col" htmlFor="attitude7">
                        <div></div>
                    </label>

                    <input
                        id="attitude8"
                        type="radio"
                        name="attitude"
                        onChange={(e) => onValueChange(e, "attitude")}
                        checked={attitude === 8}
                        value={8}
                    />
                    <label className="col" htmlFor="attitude8">
                        <div></div>
                    </label>

                    <p className="col-2">Relaxed</p>
                </div>

                <Button
                    type="submit"
                    variant="success"
                    disabled={
                        movement === null ||
                        speech === null ||
                        expressiveness === null ||
                        attitude === null
                    }
                    style={{
                        backgroundColor: "#EB772F",
                        borderColor: "#CD4E2E"
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
