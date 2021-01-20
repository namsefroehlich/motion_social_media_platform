import React, {useState} from "react";
import axios from "axios";
import {registration, validation} from "../../constants/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailIcon from "../../assets/svgs/Shape.svg";
import checkedIcon from "../../assets/svgs/checkedIcon.svg";
import { connect } from 'react-redux';

import "../../sass/login.scss";

import apple from "../../assets/svgs/apple.svg";
import google from "../../assets/svgs/google.svg";
import logo from "../../assets/images/logo_white.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";





const Register = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [currentRegisterStage, setcurrentRegisterStage] = useState(0)
    const [code, setCode] = useState("")
    const [username, setUsername] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [passwordRe, setPasswordRe] = useState("")



    const handleRegEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
    }

    const handleRegSubmit = (event) => {
        
        event.preventDefault();

        axios.post(registration, {
            email: email
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
        setcurrentRegisterStage(currentRegisterStage +1)
    }

    const handleRegStage2 = (event) => {
        setcurrentRegisterStage(currentRegisterStage +1)
    }

    const handleRegCode = (event) => {
        const newCode = event.target.value
        setCode(newCode)

    }

    const handleUsername = (event) => {
        const newUsername = event.target.value
        setUsername(newUsername)
    }

    const handleFinalSubmit = (event) => {

        axios.patch(validation, {
            email: email,
            username: username,
            code: code,
            password: password,
            password_repeat: passwordRe,
            first_name: first_name,
            last_name: last_name,
        })
        .then((response) => {
            console.log(response);
            history.push("/")

        })
        .catch((error) => {
            console.log(error);
        });
        
        
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

                    {currentRegisterStage === 0 ? 

                        <section>

                            <header className="signUp-top-right">
                                {/* <p>Already have an account?</p>
                                <button type="text" onClick={<Link to="/login">SIGN IN</Link>}/> */}
                            </header>

                            <div className="signIn">

                                <p>Sign up</p>

                                <div className="form-tab">

                                    <div className="email">

                                        <img src={emailIcon}/>
                                        
                                        <input
                                        type="text"
                                        value={email}
                                        onChange={handleRegEmail}
                                        placeholder="Email"
                                        />
                                    </div>
                                    
                                </div>

                                <div className="btn-container">
                                    <button type="text" id="signin" onClick={handleRegSubmit}>Continue</button>
                                </div>

                            </div>

                        </section>

                    : null}

                    {currentRegisterStage === 1 ?
                    
                        <section >

                            <div className="signIn">

                                <p>Congratulations!</p>
                                <img src={checkedIcon}/>

                                <div className="sentCode">
                                    <p>We've sent a confirmation code to your email {email}</p>
                                </div>

                                <div className="btn-container">
                                <button type="text" id="signin" onClick={handleRegStage2}>Continue</button>
                                {/* , <Link to={location => ({ ...location, pathname: "/" })} />} */}
                                </div>

                            </div>

                            

                        </section>
                
                
                
                
                    : null
                    }

                    {currentRegisterStage === 2 ? 
                    
                        <section className="verification">

                            <div >

                                <p>Verification</p>
                                
                            </div>

                            <div className="all-inputs">

                                <div className="vali-code">

                                    <input type="text" onChange={handleRegCode} value={code} placeholder="Validation code"/>

                                </div>

                                <div className="inputs">

                                    <input type="text" onChange={handleRegEmail} value={email} placeholder="Email"/>
                                    <input type="text" onChange={handleUsername} value={username} placeholder="Username"/>
                                    <input type="text" onChange={(event) => setFirstName(event.target.value)} value={first_name} placeholder="First name"/>
                                    <input type="text" onChange={(event) => setLastName(event.target.value)} value={last_name} placeholder="Lastname"/>
                                    <input type="text" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Password"/>
                                    <input type="text" onChange={(event) => setPasswordRe(event.target.value)} value={passwordRe} placeholder="Password repeat"/>

                                </div>

                            </div>

                            <div className="btn-container">
                                <button type="submit" id="signin" onClick={handleFinalSubmit}>COMPLETE</button>
                            </div>

                        </section>
                        
                    : null
                    }
                </div>

            </main>

        


    













        

        
    )
}



export default connect()(Register);