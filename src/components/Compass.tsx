import { Stage, Layer, Rect, Circle, Text } from "react-konva";

import { Personality, personalityGrid } from "../lib/personality";
import Gridlines from "./Gridlines";

export default function Compass({
    cellSize,
    result,
    stageRef
}: {
    cellSize: number;
    result: Personality | null;
    stageRef: any;
}) {
    return (
        <Stage ref={stageRef} width={cellSize * 4} height={cellSize * 4}>
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

                                        <Gridlines cellSize={cellSize} />

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
                            {result && (
                                <Circle
                                    x={
                                        (result.movement! + result.speech!) *
                                        (cellSize / 4)
                                    }
                                    y={
                                        (16 -
                                            (result.expressiveness! +
                                                result.attitude!)) *
                                        (cellSize / 4)
                                    }
                                    width={25}
                                    height={25}
                                    fill="black"
                                />
                            )}
                        </Layer>
                    );
                })}
        </Stage>
    );
}
