import { Line } from "react-konva";

export default function Gridlines({ cellSize }: { cellSize: number }) {
    const vertical = [];
    const horizontal = [];

    for (let i = 0; i < 16; i++) {
        vertical.push(
            <Line
                key={`v${i}`}
                points={[
                    i * (cellSize / 4),
                    0,
                    i * (cellSize / 4),
                    cellSize * 4
                ]}
                stroke="black"
                strokeWidth={i % 4 === 0 ? 5 : 2}
            />
        );
        horizontal.push(
            <Line
                key={`h${i}`}
                points={[
                    0,
                    i * (cellSize / 4),
                    cellSize * 4,
                    i * (cellSize / 4)
                ]}
                stroke="black"
                strokeWidth={i % 4 === 0 ? 5 : 2}
            />
        );
    }

    return <>{[...vertical, ...horizontal]}</>;
}
