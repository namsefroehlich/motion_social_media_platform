import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default WrapperComponent => (props) => {

    const token = useSelector(state => state.userLoginReducer.token)
    console.log("TokenTest", token)
    const history = useHistory()

    const redirect = () => {
        if (!token) {
            history.push('/');
        } else {
            history.push("/home/feed")
        }
    }

    useEffect(() => {

    redirect()

    },[token])

    return <WrapperComponent {...props}/>
}

