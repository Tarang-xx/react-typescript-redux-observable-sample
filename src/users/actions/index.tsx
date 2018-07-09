import { createAction } from "typesafe-actions";
import * as constants from '../constants'
import { IUser } from '../types/index';


export type Action =
    () => {
        type: string;
        payload?: {};
    };

export type GetUser = (userId: string) => {
    type: constants.GET_USER;
    payload: {};
};
export type GetUserSuccess = (user: IUser) => {
    type: constants.GET_SUCCESS;
    payload:  IUser;
};
export type GetUserFails = (errors: any) => {
    type: constants.GET_FAILS;
    payload?: {};
};



export const getUser: GetUser = createAction(constants.GET_USER,resolve => {
    return (userId: string) => resolve(userId);
});
export const getUserSuccess: GetUserSuccess = createAction(constants.GET_SUCCESS, resolve => {
    return (user: IUser) => resolve(user);
});

export const getUserFail: GetUserFails = createAction(constants.GET_FAILS, (resolve: any) => {
    return (errors: any) => resolve(errors);
});

export const updateLoading: Action = createAction(constants.UPDATE_LOADING, resolve => {
    return () => resolve({});
});
export type UserAction = GetUser | GetUserSuccess | GetUserFails ;