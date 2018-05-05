import { Sensor } from './sensor.class';
import { Actor } from './actor.class';
import { DeviceGroup } from './device-group.class';

export class Area {
    public number: number;
	public sensors: Sensor[]; // deprecated
    public actors: Actor[]; // deprecated
    public deviceGroups: DeviceGroup[];
}