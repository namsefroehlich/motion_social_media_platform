// action creator
export const setUserData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
} 

export const userAction = ( type) => async (dispatch, getState) => {   
    // const { userLoginReducer:{ token } } = getState();  
    
    var token = localStorage.getItem("token");
    const url = "https://motion.propulsion-home.ch/backend/api/users/me/";

    const config = {
        method: "GET",
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
        }),
        
    };
    
    console.log(token)
    const response = await fetch(url, config)
    const data = await response.json();

    console.log("in da fetch about me")

    dispatch(setUserData(type, data));
    console.log("data", data)
};
