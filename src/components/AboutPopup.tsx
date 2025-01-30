import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

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
                        on the personality feature of "Tomodachi Life".
                    </p>
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
