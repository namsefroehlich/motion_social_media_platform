import { USER_LOGIN } from '../../../constants/index';
import { USER_LOGOUT } from '../../../constants/index';




export const initalState = {

    user: null,
    token: null,
    authenticated: false,
};

 const userLoginReducer = (state = initalState, action) => {

    switch (action.type) {

        case USER_LOGIN: {
            return {
                user: action.payload.user.user,
                token: action.payload.user.access,
                authenticated: action.payload.authenticated,
            };
        }
        case USER_LOGOUT: {
            console.log(action)
            return {
                user: null,
                token: null,
                authenticated: null,
                
            };
            
        }
        default:
            return state;
    }

}
export default userLoginReducer;
