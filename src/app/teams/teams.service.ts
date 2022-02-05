/**
 * Interface representing a team configuration, with multiple substitute options
 */
export interface Team {
    /**  Teams unique identifier󠀡 */
    id: number;
    /** Common team name */
    name: string;
    /** How the team funcitons */
    desc: string;
    /** List of character ID's who can perform in slot1 */
    slot1: number[];
    /** List of character ID's who can perform in slot2 */
    slot2: number[];
    /** List of character ID's who can perform in slot3 */
    slot3: number[];
    /** List of character ID's who can perform in slot4 */
    slot4: number[];
    /** Tags categorising the team */
    tags: string[]
}