import {postCreate } from "../constants/index"
import {like} from "../constants/index"


// action creator
export const setPostData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
} 

export const postAction = (body, type) => async (dispatch, getState) => {   
    const { userLoginReducer:{ token } } = getState();    
    const config = {
        method: "POST",
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }),
        body: body
    };

    const response = await fetch(postCreate, config)
    const data = await response.json();
    dispatch(setPostData(type, data));
};

export const listPost = (type) => async (dispatch, getState) => {
    const { userLoginReducer:{ token } } = getState();
    const config = {
        method: "GET",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type" : "application/json"
        }),
        
    }

    const response = await fetch(postCreate, config)
    const data = await response.json();
    dispatch(setPostData(type, data))
    
    console.log(data);
}


export const likePost = (type, postId, body) => async (dispatch, getState) => {
    const { userLoginReducer:{ token } } = getState();
    const config = {
        method: "POST",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type" : "application/json"
        }),
        body: body
        
    }

    const response = await fetch(like + postId +"/", config)
    const data = await response.json();
    dispatch(setPostData(type, data))
    console.log(data);
}
