/**
 * Interface representing an artifact set
 */
export interface Artifact {
    /** Unique artifact identifier */
    id: number;
    /** Artifact set name */
    name: string;
    /** Relative path to artifact set image */
    img: string;
}

/**
 * Interface representing a weapon
 */
export interface Weapon {
    /** Unique weapon identifier */
    id: number;
    /** Weapon name */
    name: string;
    /** Relative path to weapon image */
    img: string;
}

/**
 * A mapping between a character, team and the
 * characters associated build
 */
export interface BuildMap {
    /** The team foreign key */
    teamID: number;
    /** the character foreign key */
    charID: number;
    /** The 2pc artifact ID */
    arti_twoID: number;
    /** The second 2pc artifact ID (identical to first if 4pc) */
    arti_fourID: number;
    /** The artifact maistats */
    artifactStat: string;
    /** The five star weapons ID */
    five_wepID: number;
    /** The four star weapons ID */
    four_wepID: number;
}