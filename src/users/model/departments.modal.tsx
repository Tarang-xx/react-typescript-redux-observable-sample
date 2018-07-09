import { IDepartment } from '../types/index';

export  class DepartmentsModel implements IDepartment {
    departmentsName: string;
    userId: string[];
    constructor( departmentsName: string='', userId: string[]=[]) {
        this.departmentsName=departmentsName;
        this.userId=userId;
    }
}