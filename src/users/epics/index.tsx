
import { Epic } from "redux-observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/exhaustMap";
import { updateLoading} from "../actions";
import { GET_USER, GET_SUCCESS } from '../constants/index';
import UserService from '../services/user.service';

const userService =new UserService()
//Get user details  Epic
const GetUserEpic: Epic<any, any> = (action$: any, state: any) =>
    action$.ofType(GET_USER).
    mergeMap((action: any) => userService.getUserDetails(action, state));

//Loading Epic
const Loading : Epic<any, any> = (action$: any, state: any) =>
    action$.ofType(...[GET_SUCCESS,GET_USER]).map((action: any)=> updateLoading());

export default [
    
    Loading,    
    GetUserEpic
];

