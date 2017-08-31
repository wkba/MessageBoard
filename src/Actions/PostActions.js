import {database} from "../Firebase";

export const FETCH_POSTS = 'fetch_posts';

export function getPosts() {
    console.log('fire getPosts');
    return dispatch => {
        database.on('value', data => {
            console.log('data.val() in getPosts', data.val());
            dispatch({
                type: FETCH_POSTS,
                payload: data.val()
            })
        })
    }
}

export function savePost(values) {
    console.log('fired savePost');
    return dispatch => database.push(values);
}

export function deletePost(id) {
    return dispatch => database.child(id).remove();
}