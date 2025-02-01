import { Line } from "react-konva";

export default function Gridlines({
    cellSize,
    x,
    y
}: {
    cellSize: number;
    x: number;
    y: number;
}) {
    return (
        <>
            <Line
                points={[
                    x * cellSize,
                    0 * (cellSize / 4) + y * cellSize,
                    (x + 1) * cellSize,
                    0 * (cellSize / 4) + y * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    x * cellSize,
                    1 * (cellSize / 4) + y * cellSize,
                    (x + 1) * cellSize,
                    1 * (cellSize / 4) + y * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    x * cellSize,
                    2 * (cellSize / 4) + y * cellSize,
                    (x + 1) * cellSize,
                    2 * (cellSize / 4) + y * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    x * cellSize,
                    3 * (cellSize / 4) + y * cellSize,
                    (x + 1) * cellSize,
                    3 * (cellSize / 4) + y * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    x * cellSize,
                    4 * (cellSize / 4) + y * cellSize,
                    (x + 1) * cellSize,
                    4 * (cellSize / 4) + y * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />

            <Line
                points={[
                    0 * (cellSize / 4) + x * cellSize,
                    y * cellSize,
                    0 * (cellSize / 4) + x * cellSize,
                    (y + 1) * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    1 * (cellSize / 4) + x * cellSize,
                    y * cellSize,
                    1 * (cellSize / 4) + x * cellSize,
                    (y + 1) * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    2 * (cellSize / 4) + x * cellSize,
                    y * cellSize,
                    2 * (cellSize / 4) + x * cellSize,
                    (y + 1) * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    3 * (cellSize / 4) + x * cellSize,
                    y * cellSize,
                    3 * (cellSize / 4) + x * cellSize,
                    (y + 1) * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
            <Line
                points={[
                    4 * (cellSize / 4) + x * cellSize,
                    y * cellSize,
                    4 * (cellSize / 4) + x * cellSize,
                    (y + 1) * cellSize
                ]}
                stroke="black"
                strokeWidth={5}
            />
        </>
    );
}
