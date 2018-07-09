
import { Observable } from 'rxjs-compat/Observable';
import { getUserSuccess, getUserFail } from "../actions";
import { instance } from '../axios-user';

export default class UserService {
    constructor() { }
    getUserDetails(action: any, state: any) {
       // user already fetched then look first in store
        const userCount = state.value.users.filter((usr: any) => usr.id == action.payload);
        return userCount.length > 0 ?
                Observable.create((obs: any) => {
                    obs.next(getUserSuccess(userCount[0]));
                    obs.complete();
                })
            :
                Observable.create((obs: any) => {
                    instance.get('/' + action.payload)
                        .then((resp: any) => resp.data)
                        .then((user) => {

                            obs.next(getUserSuccess(user.data));
                            obs.complete();
                        })
                        .catch(err => {
                            obs.next(getUserFail(err));
                            obs.complete();
                        });
                });
    }
}