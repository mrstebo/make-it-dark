import { Level } from "./Level";
import { StandardLevel } from "./StandardLevel";

export class LevelFactory {
    createLevel(levelType: string): Level {
        switch (levelType) {
            case 'standard':
                return new StandardLevel();

            default:
                throw new Error(`Unknown level type: ${levelType}`);
        }
    }
}
