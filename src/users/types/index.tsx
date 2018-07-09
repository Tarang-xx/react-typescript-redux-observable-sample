export type StoreState = {
    departments: IDepartment [];
    users: IUser[];
    selectedUser: IUser;
    errors:any;
    isLoading:boolean;
}

export interface IDepartment
{
    departmentsName : string,
    userId:string [] 
}
export interface IUser
{
    id:string,
    name:string,
    year:string,
    color:string,
    pantone_value:string
}