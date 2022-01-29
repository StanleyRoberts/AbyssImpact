import { Char } from './char';

/**
 * TODO #7 this should populate from a JSON file
 */
declare function read(): any;

export const CHARS: Char[] = [
    {
        id: 1,
        name: "Amber",
        img: "assets/Character_Amber_Thumb.png",
        desc: "A MainDPS who focuses on charged shots. Her low burst cooldown also allows her to support using \'Elegy of the End\'",
        role: "MainDPS"
    },
    {
        id: 2,
        name: "Kokomi",
        img: "assets/Character_Sangonomiya_Kokomi_Thumb.png",
        desc: "A support who outputs an incredible amount of healing, hydro application and solid damage",
        role: "Healer"
    }
];