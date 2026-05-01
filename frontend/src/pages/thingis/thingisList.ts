export type ThingiInfo = {
    name: string;
    icon: string;
    tags: ThingiTag[];
    uri: string;
}
export enum ThingiTag {
    None= 'None',
    Productive="productive",
    Fun = "fun",
    Color="color",
    Time = "time",
}
export const ThingiTagColors:{[id:string]:string} = {
    productive: 'grey',
    fun: 'purple',
    color: 'yellow',
    time: 'red',
}

export const thingis:ThingiInfo[] = [
    {
        name: "colorPicker",
        icon: "recources/thingis/ColorPicker64.png",
        uri: "color-picker",
        tags: [ThingiTag.Productive, ThingiTag.Color]
    },
    {
        name: "superAi",
        icon: "recources/thingis/Brain64.png",
        uri: "super-ai",
        tags: [ThingiTag.Fun]
    },
    {
        name: "multiCounter",
        icon: "recources/Pondering.png",
        uri: "multi-counter",
        tags: [ThingiTag.Productive]
    },
    {
        name: "multiTimer",
        icon: "recources/Pondering.png",
        uri: "multi-timer",
        tags: [ThingiTag.Productive, ThingiTag.Time]
    },
    {
        name: "pomodore",
        icon: "someArtShit",
        uri: "pomodore",
        tags: [ThingiTag.Productive, ThingiTag.Time]
    }
]


