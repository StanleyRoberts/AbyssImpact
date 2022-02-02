export interface Char {
    id: number;
    name: string;
    img: string;
    desc: string;
    roles: rolePair[];
}

export interface rolePair {
    role: string;
    priority: string; // hacky, primary role value = themepallete string
}