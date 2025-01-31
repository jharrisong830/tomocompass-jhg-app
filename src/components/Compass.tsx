import { Stage, Layer, Rect, Text } from "react-konva";

import { personalityGrid } from "../lib/personality";

export default function Compass() {
    const unitSize = Math.min(window.innerWidth / 4, window.innerHeight / 4);

    return (
        <Stage width={unitSize * 4} height={unitSize * 4}>
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
                                            x={x * unitSize}
                                            y={y * unitSize}
                                            width={unitSize}
                                            height={unitSize}
                                            fill={elem.color}
                                        />
                                        <Text
                                            id={`${elem.quadrant}-${elem.subtype}`}
                                            x={x * unitSize}
                                            y={y * unitSize}
                                            text={`${elem.quadrant}-${elem.subtype}`}
                                        />
                                    </div>
                                );
                            })}
                        </Layer>
                    );
                })}
            {/* <Layer id="Easygoing">
                <Rect id="Softie" x={0} y={0} width={unitWidth} height={unitHeight} fill="#F2ADAA" />
                <Rect id="Optimist" x={unitSize} y={0} width={unitWidth} height={unitHeight} fill="#F09B98" />
                <Rect id="Buddy" x={0} y={unitSize} width={unitWidth} height={unitHeight} fill="#FBE878" />
                <Rect id="Dreamer" x={unitSize} y={unitSize} width={unitWidth} height={unitHeight} fill="#F5CA5B" />
            </Layer> */}
        </Stage>
    );
}
