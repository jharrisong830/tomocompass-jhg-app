import { Stage, Layer, Rect, Text } from "react-konva";

import { personalityGrid } from "../lib/personality";

export default function Compass({ cellSize }: { cellSize: number }) {
    // const cellSize = Math.min(window.innerWidth / 4, window.innerHeight / 4);

    return (
        <Stage width={cellSize * 4} height={cellSize * 4}>
            {personalityGrid
                .slice()
                .reverse()
                .map((row, y) => {
                    return (
                        <Layer id={`row${y}`} key={y}>
                            {row.map((elem, x) => {
                                return (
                                    <div
                                        key={`${elem.quadrant}-${elem.subtype}`}
                                        id={`${elem.quadrant}-${elem.subtype}`}
                                    >
                                        <Rect
                                            id={`${elem.quadrant}-${elem.subtype}`}
                                            x={x * cellSize}
                                            y={y * cellSize}
                                            width={cellSize}
                                            height={cellSize}
                                            fill={elem.color}
                                        />
                                        <Text
                                            id={`${elem.quadrant}-${elem.subtype}`}
                                            x={x * cellSize}
                                            y={y * cellSize}
                                            width={cellSize}
                                            height={cellSize}
                                            align="center"
                                            verticalAlign="middle"
                                            text={`${elem.quadrant}-${elem.subtype}`}
                                        />
                                    </div>
                                );
                            })}
                        </Layer>
                    );
                })}
        </Stage>
    );
}
