export type Attribute = "movement" | "speech" | "expressiveness" | "attitude";

export type Quadrant = "Independent" | "Confident" | "Easygoing" | "Outgoing";
export type Subtype =
    | "Lone Wolf"
    | "Thinker"
    | "Brainiac"
    | "Go-getter"
    | "Free Spirit"
    | "Artist"
    | "Designer"
    | "Adventurer"
    | "Buddy"
    | "Dreamer"
    | "Charmer"
    | "Leader"
    | "Softie"
    | "Optimist"
    | "Trendsetter"
    | "Entertainer";

export type Personality = {
    quadrant: Quadrant;
    subtype: Subtype;
    color: string;
};

export const personalityGrid: Array<Array<Personality>> = [
    [
        {
            quadrant: "Independent",
            subtype: "Lone Wolf",
            color: "#FFFFFF"
        },
        {
            quadrant: "Independent",
            subtype: "Thinker",
            color: "#FFFFFF"
        },
        {
            quadrant: "Confident",
            subtype: "Brainiac",
            color: "#FFFFFF"
        },
        {
            quadrant: "Confident",
            subtype: "Go-getter",
            color: "#FFFFFF"
        }
    ],
    [
        {
            quadrant: "Independent",
            subtype: "Free Spirit",
            color: "#FFFFFF"
        },
        {
            quadrant: "Independent",
            subtype: "Artist",
            color: "#FFFFFF"
        },
        {
            quadrant: "Confident",
            subtype: "Designer",
            color: "#FFFFFF"
        },
        {
            quadrant: "Confident",
            subtype: "Adventurer",
            color: "#FFFFFF"
        }
    ],
    [
        {
            quadrant: "Easygoing",
            subtype: "Buddy",
            color: "#FFFFFF"
        },
        {
            quadrant: "Easygoing",
            subtype: "Dreamer",
            color: "#FFFFFF"
        },
        {
            quadrant: "Outgoing",
            subtype: "Charmer",
            color: "#FFFFFF"
        },
        {
            quadrant: "Outgoing",
            subtype: "Leader",
            color: "#FFFFFF"
        }
    ],
    [
        {
            quadrant: "Easygoing",
            subtype: "Softie",
            color: "#FFFFFF"
        },
        {
            quadrant: "Easygoing",
            subtype: "Optimist",
            color: "#FFFFFF"
        },
        {
            quadrant: "Outgoing",
            subtype: "Trendsetter",
            color: "#FFFFFF"
        },
        {
            quadrant: "Outgoing",
            subtype: "Entertainer",
            color: "#FFFFFF"
        }
    ]
];

export const calculatePersonality = (
    movement: number,
    speech: number,
    expressiveness: number,
    attitude: number
): Personality => {
    const xAxis = Math.floor((movement + speech) / 4);
    const yAxis = Math.floor((expressiveness + attitude) / 4);

    return personalityGrid[yAxis][xAxis];
};
