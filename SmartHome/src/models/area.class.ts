import { Sensor } from './sensor.class';
import { Actor } from './actor.class';

export class Area {
    public number: number;
    public sensors: Sensor[];
    public actors: Actor[];
}