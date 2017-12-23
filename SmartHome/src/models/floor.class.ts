import { Area } from './area.class';
import { Block } from './block.class';

export class Floor extends Area{
    public number: number;
    public blocks: Block[];
}