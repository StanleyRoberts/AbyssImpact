export interface Artifact {
    id: number;
    name: string;
    img: string;
}

export interface Weapon {
    id: number;
    name: string;
    img: string;
}

export interface BuildMap {
    teamID: number;
    charID: number;
    artifactID: number;
    five_wepID: number
    four_wepID: number
}