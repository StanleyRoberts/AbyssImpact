/** An interface representing a character */
export interface Char {
    /** Unique character identifier */
    id: number;
    /** Character name */
    name: string;
    /** Relative path to character image */
    img: string;
    /** Character description */
    desc: string;
    /** List of roles the character can fill */
    roles: rolePair[];
}

/** Represents a role and associated priority of a character */
export interface rolePair {
    /** The roles name */
    role: string;
    /** A ThemePallete string who represent the priority of the tole */
    priority: string; // hacky, themepallete string should be inferred from priority
}