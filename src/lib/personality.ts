export type Attribute =
    | "movement"
    | "speech"
    | "expressiveness"
    | "attitude"
    | "overall";

export type Quadrant = "Independent" | "Confident" | "Easygoing" | "Outgoing";
export type Subtype =
    | "Lone Wolf"
    | "Thinker"
    | "Brainiac"
    | "Go-Getter"
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
            color: "#628080"
        },
        {
            quadrant: "Independent",
            subtype: "Thinker",
            color: "#689495"
        },
        {
            quadrant: "Confident",
            subtype: "Brainiac",
            color: "#2962F6"
        },
        {
            quadrant: "Confident",
            subtype: "Go-Getter",
            color: "#563EEF"
        }
    ],
    [
        {
            quadrant: "Independent",
            subtype: "Free Spirit",
            color: "#719E6A"
        },
        {
            quadrant: "Independent",
            subtype: "Artist",
            color: "#7ABC56"
        },
        {
            quadrant: "Confident",
            subtype: "Designer",
            color: "#4294F6"
        },
        {
            quadrant: "Confident",
            subtype: "Adventurer",
            color: "#8C5EEF"
        }
    ],
    [
        {
            quadrant: "Easygoing",
            subtype: "Buddy",
            color: "#FBE878"
        },
        {
            quadrant: "Easygoing",
            subtype: "Dreamer",
            color: "#F5CA5B"
        },
        {
            quadrant: "Outgoing",
            subtype: "Charmer",
            color: "#EC782F"
        },
        {
            quadrant: "Outgoing",
            subtype: "Leader",
            color: "#EB5D2A"
        }
    ],
    [
        {
            quadrant: "Easygoing",
            subtype: "Softie",
            color: "#F2ADAA"
        },
        {
            quadrant: "Easygoing",
            subtype: "Optimist",
            color: "#F09B98"
        },
        {
            quadrant: "Outgoing",
            subtype: "Trendsetter",
            color: "#E93D81"
        },
        {
            quadrant: "Outgoing",
            subtype: "Entertainer",
            color: "#DC2F21"
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
