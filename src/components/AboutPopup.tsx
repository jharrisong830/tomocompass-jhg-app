import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import Compass from "./Compass";

export default function AboutPopup() {
    const [isShowing, setIsShowing] = useState(false);

    const handleOpen = () => setIsShowing(true);
    const handleClose = () => setIsShowing(false);

    return (
        <div>
            <Button onClick={handleOpen}>What is this?</Button>

            <Modal show={isShowing} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About TomoCompass</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        TomoCompass is a simple personality quiz, based directly
                        on the{" "}
                        <a
                            href="https://tomodachi.fandom.com/wiki/Personality"
                            rel="noreferrer"
                            target="_blank"
                        >
                            personality feature
                        </a>{" "}
                        of "Tomodachi Life".
                    </p>
                    <p>
                        The quiz will ask you to rank four aspects of your
                        personality: movement, speech, expressiveness, and
                        attitude. How you rank yourself determines your position
                        on the below grid. There are four personality
                        types/quadrants, each of which has four subtypes.
                    </p>
                    <Compass cellSize={100} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
