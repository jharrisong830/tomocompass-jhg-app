import { Personality } from "../lib/personality";

export default function PersonalityResult({ result }: { result: Personality }) {
    return (
        <div
            className="alert mt-3"
            role="alert"
            style={{ backgroundColor: result.color }}
        >
            Your personality is: {result.quadrant} {result.subtype}
        </div>
    );
}
