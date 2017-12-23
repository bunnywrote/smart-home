import { Area } from './area.class';
import { Floor } from './floor.class';

export class House extends Area {
    public address: string;
    public floors: Floor[];
}