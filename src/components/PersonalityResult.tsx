import { Button } from "react-bootstrap";

import { Personality } from "../lib/personality";

export default function PersonalityResult({
    result,
    stageRef
}: {
    result: Personality;
    stageRef: any;
}) {
    const handleDownload = () => {
        if (stageRef.current && result) {
            const dataURL = stageRef.current.toDataURL({
                mimeType: "image/png"
            });
            console.log(dataURL);

            const link = document.createElement("a");
            link.download = "tomocompass-result.png";
            link.href = dataURL;
            link.click();
        }
    };

    return (
        <div>
            <div
                className="alert mt-3"
                role="alert"
                style={{ backgroundColor: result.color }}
            >
                Your personality is: {result.quadrant} {result.subtype}
            </div>
            <Button
                onClick={handleDownload}
                variant="success"
                style={{
                    backgroundColor: "#EB772F",
                    borderColor: "#CD4E2E"
                }}
            >
                Download Results
            </Button>
        </div>
    );
}
