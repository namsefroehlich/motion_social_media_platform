import React, { useState } from 'react';
import { userLogin} from "../../actions/userLoginAction";
import { connect } from 'react-redux';
import "../../sass/login.scss";
import avatar from "../../assets/svgs/avatar.svg"
import passswordPic from "../../assets/svgs/password.svg"
import apple from "../../assets/svgs/apple.svg";
import google from "../../assets/svgs/google.svg";
import logo from "../../assets/images/logo_white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useHistory } from "react-router-dom";



const LogIn = (props) => {

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nextButtonHandler = async(event) => {
        
        console.log(props);
        
        const user = await props.dispatch(userLogin({
            email: email,
            password: password
            
        }));
        console.log("User", user)
        if (user.access) {
            history.push("/home/feed")
        }
        

    }

    
    return (

        
            <main className="container">
                <div className="container left">
                    <img src={logo}/>
                    <h1>Motion</h1>
                    <p>Connect with friends and the world around you with Motion.</p>
                    
                    <div id="appbuttons">
    
                        <button className="buttonsleft" type="button"><img src={apple}/></button>
                        <button className="buttonsleft" type="button"><img src={google}/></button>
    
                    </div>
                    
                    
                    
                    <footer>
                        <div className="socialmedia">
                            <FontAwesomeIcon className="icons" icon={ faTwitter }/>
                            <FontAwesomeIcon className="icons" icon={ faFacebookF }/>
                            <FontAwesomeIcon className="icons" icon={ faInstagram }/>
                        </div>
                        <p className="rightsreserved">© Motion 2018. All rights reserved.</p>
                    </footer>
                </div>

                <div className="container right">

                    <header className="signUp">

                        <label for="signup">Dont have an account?</label>

                        <button type="submit" id="signup" value="Sign Up"><a href="/home/registration">Sign Up</a></button>

                    </header>
                
                    <form className="signIn">
                        <p>Sign In</p>
                        <div className="form-tab">
                            <div className="email">

                                <img src={avatar}/>
                                <input type="email" placeholder="E-mail..." value={email} onChange={ event => setEmail(event.target.value) } />
                                
                            </div>

                            <div className="password">

                            <img src={passswordPic}/>
                            <input type="password" placeholder="Password..." value={password} onChange={ event => setPassword(event.target.value) } />

                            </div>
                        </div>
                        
                        <div className="btn-container" >
                            <button type="button" id="signin" onClick={nextButtonHandler}>Login</button>
                        </div>
                    </form>

                </div>
                

            </main>

            
    
    
        

        
        
    )

}

export default connect()(LogIn);