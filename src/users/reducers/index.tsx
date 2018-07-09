// src/reducers/index.tsx
import { ActionType, } from 'typesafe-actions';

import * as UserAction from '../actions';
import { GET_SUCCESS, GET_FAILS, UPDATE_LOADING } from '../constants/index';
import { StoreState } from '../types/index';
import { DepartmentsModel } from '../model/departments.modal';
import { User } from '../model/user.model';

export type Action = ActionType<typeof UserAction>;

export const intialState: StoreState = {
    departments: [new DepartmentsModel('HR', ['1', '2', '3', '4', '5']), new DepartmentsModel('Engineering', ['6', '7', '8', '9','10'])],
    users: [new User()],
    selectedUser: new User(),
    errors: {},
    isLoading: false
}
export function reducer(state: StoreState = intialState, action: any): StoreState {
    switch (action.type) {
        case GET_SUCCESS:
            return { ...state, users: updateUsers(action, state),
                     ...state, selectedUser: updateUsers(action, state).filter((user:any)=> user.id=== action.payload.id)[0]};
        case GET_FAILS:
            return { ...state, errors: action.payload };
        case UPDATE_LOADING:
            return { ...state, isLoading: !state.isLoading };
    }
    return state;
}

function updateUsers(action: any, state: any): any {
    debugger;
    if (action.payload === undefined) {
        return state.users;
    }
    const isExist = state.users.filter((u: any) => u.id === action.payload.id);
    if (isExist.length===0 && action.payload.id) {
        const objUser = new User()
        objUser.id = action.payload.id;
        objUser.name = action.payload.name;
        objUser.pantone_value = action.payload.pantone_value;
        objUser.year = action.payload.year;
        objUser.color = action.payload.color;        
        state.selectedUser=objUser;
        state.users.push(objUser);
    }
    return state.users
}