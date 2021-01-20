import React, { useState } from 'react';



export const LoginInfo = (props) => {
    const[isLogInVisible, setLoginVisibility] = useState(props.location.isLogInVisible);

     const logInButtonHandler = () => {
        setLoginVisibility(!isLogInVisible);
    }
    
    return (
        <>
            
            <div className={`info-container${ isLogInVisible ? '' : 'hidden'}`}>
                <h3>Please go to the user menu and login to check your shopping cart.</h3>
                <div className="btn-container" >
                    <button type="button" onClick={this.logInButtonHandler} >Got it!</button>
                </div>
            </div>
        </>
    )
}


