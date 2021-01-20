import { ABOUT_USER} from '../../../constants/index';



const initialState = { 
    aboutMe: []
}

export default function userReducer (state = initialState, action) {
    console.log("in da userReducer")
    
    switch (action.type) {
        case ABOUT_USER: {

            return {...state, aboutMe: action.payload}
            
        }

        default: {
            return state
        }
    }
    
}

