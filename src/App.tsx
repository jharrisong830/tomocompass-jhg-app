import { useState } from "react";
import { Button } from "react-bootstrap";

import PersonalityQuiz from "./components/PersonalityQuiz";
import { calculatePersonality, Personality } from "./lib/personality";
import PersonalityResult from "./components/PersonalityResult";
import AboutPopup from "./components/AboutPopup";
import Compass from "./components/Compass";
import Connections from "./components/Connections";

export default function App() {
    const version = __APP_VERSION__;
    const year = new Date().getFullYear();

    const [movement, setMovement] = useState<number | null>(null);
    const [speech, setSpeech] = useState<number | null>(null);
    const [expressiveness, setExpressiveness] = useState<number | null>(null);
    const [attitude, setAttitude] = useState<number | null>(null);
    const [overall, setOverall] = useState<number | null>(null);

    const [result, setResult] = useState<Personality | null>(null);

    /** set all attributes to null to reset the quiz */
    const handleReset = () => {
        setMovement(null);
        setSpeech(null);
        setExpressiveness(null);
        setAttitude(null);
        setResult(null);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(
            calculatePersonality(
                movement!,
                speech!,
                expressiveness!,
                attitude!,
                overall!
            )
        );
    };

    return (
        <main>
            <nav
                className="navbar sticky-top navbar-expand-md"
                data-bs-theme="light"
                style={{ backgroundColor: "#FDF3A5" }}
            >
                <div className="container-fluid">
                    <div className="fw-bold">
                        <a>tomocompass.</a>
                        <a
                            className="navbar-brand"
                            href="https://jhg.app"
                            rel="noreferrer"
                            target="_blank"
                        >
                            jhg.app
                        </a>
                    </div>
                </div>
            </nav>

            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-bold text-body-emphasis">
                    TomoCompass
                </h1>
                <p className="lead">Tomodachi Life Personality Quiz</p>
                <AboutPopup />
            </div>

            <PersonalityQuiz
                movement={movement}
                setMovement={setMovement}
                speech={speech}
                setSpeech={setSpeech}
                expressiveness={expressiveness}
                setExpressiveness={setExpressiveness}
                attitude={attitude}
                setAttitude={setAttitude}
                overall={overall}
                setOverall={setOverall}
                onSubmit={onSubmit}
            />

            <Button
                variant="danger"
                onClick={handleReset}
                disabled={
                    movement === null &&
                    speech === null &&
                    expressiveness === null &&
                    attitude === null &&
                    overall === null
                }
            >
                Reset
            </Button>

            {result && <PersonalityResult result={result} />}

            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Compass cellSize={400} result={result} />
                    </div>
                </div>
            </div>

            <Connections />

            <div className="container text-center">
                <p className="lead text-body-emphasis">
                    TomoCompass v{version}
                </p>
                <p className="lead text-body-emphasis">
                    &copy; {year} John Graham
                </p>
            </div>
        </main>
    );
}
