import {FETCH_POSTS} from '../Actions/PostActions';

export default function (state = {}, action) {
    //switchを使うところまでは、デフォルト
    switch (action.type){
        case FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
}