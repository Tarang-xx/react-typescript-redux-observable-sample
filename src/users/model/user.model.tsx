import { IUser } from '../types/index';
export class User implements IUser {
    id: string;
    name: string;
    year: string;
    color: string;
    pantone_value: string;
}