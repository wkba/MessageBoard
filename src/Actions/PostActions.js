import { database } from '../Firebase';
export const FETCH_POSTS = 'fetch_posts';
export const POST_STATUS = 'post_status';

export function getPosts() {
    return dispatch => {
        dispatch({
            type: POST_STATUS,
            payload: true
        });
        database.on('value', snapshot => {
            dispatch({
                type: POST_STATUS,
                payload: false
            });
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        }, () => {
            dispatch({
                type: POST_STATUS,
                payload: -1
            })
        });
    };
}

export function savePost(values) {
    console.log('fired savePost');
    return dispatch => database.push(values);
}

export function deletePost(id) {
    return dispatch => database.child(id).remove();
}