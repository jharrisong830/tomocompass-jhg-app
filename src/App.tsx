import PersonalityQuiz from "./components/PersonalityQuiz";

export default function App() {
    return (
        <main>
            <nav
                className="navbar sticky-top navbar-expand-md"
                data-bs-theme="dark"
                style={{ backgroundColor: "#253863" }}
            >
                <div className="container-fluid">
                    <div className="fw-bold">
                        <a>links.</a>
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
                    beep boop
                </h1>
                <p className="lead">Tomodachi Life Personality Quiz</p>
                <p>See <a href="https://tomodachi.fandom.com/wiki/Personality" rel="noreferrer" target="_blank">here</a> for details</p>
            </div>

            
            <PersonalityQuiz />
        </main>
    );
}
