export type Attribute = "movement" | "speech" | "expressiveness" | "attitude";

export const personalityGrid: Array<Array<string>> = [
    [
        "Independent_Lone Wolf",
        "Independent_Thinker",
        "Confident_Brainiac",
        "Confident_Go-getter"
    ],
    [
        "Independent_Free Spirit",
        "Independent_Artist",
        "Confident_Designer",
        "Confident_Adventurer"
    ],
    [
        "Easygoing_Buddy",
        "Easygoing_Dreamer",
        "Outgoing_Charmer",
        "Outgoing_Leader"
    ],
    [
        "Easygoing_Softie",
        "Easygoing_Optimist",
        "Outgoing_Trendsetter",
        "Outgoing_Entertainer"
    ]
];

export const calculatePersonality = (
    movement: number,
    speech: number,
    expressiveness: number,
    attitude: number
) => {
    const xAxis = Math.floor((movement + speech) / 4);
    const yAxis = Math.floor((expressiveness + attitude) / 4);

    return personalityGrid[yAxis][xAxis];
};
