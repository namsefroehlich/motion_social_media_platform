import { useState } from 'react'
import { connect } from 'react-redux'
import { List_all_Posts } from '../../../constants'
import { Create_new_Post } from "../../../constants/index"
// import { GET_SPECIFIC_POST } from '../../constants'
import {like_post} from "../../../constants/index"

const initialState = { 
    postsAllChron: [],
    newPost: "tomin",
    specificPost: "tomin",
    liked: ""
}


export default function postReducer (state = initialState, action) {
    
    switch (action.type) {
        case List_all_Posts: {
            return {
                ...state,
                postsAllChron: action.payload
            }

            // const newState = {...state}
            // newState.postsAllChron = action.payload
            // return newState
        }
        case Create_new_Post: {
            const newState = {...state}
            newState.newPost = action.payload
            return newState
        }
        case like_post: {
            return {
                ...state,
                liked: action.payload
            }
        }
        default: {
            return state
        }
    }

   
}

