import React, { Component } from 'react';
import "../../sass/profile/profilepage.scss";
import userpicture from "../../assets/images/users/leticia.png";
import { useEffect } from 'react';
import {ABOUT_USER} from "../../constants/index";
import { useDispatch, useSelector} from 'react-redux';
import {userAction} from "../../actions/userAction";
import axios from 'axios';
import {authentication} from "../../constants/index";
import {userLoginAction} from "../../actions/userLoginAction";
import userReducer from "../../components/store/reducers/userReducer";
import catto from "../../assets/catto.jpg";

export const Profile = ({data},props) => {
 
    
    const dispatch = useDispatch();

    const aboutMe = useSelector((state) => state.userReducer.aboutMe)
    
    useEffect(() => {
        const userData = async () => {
            await dispatch(userAction(ABOUT_USER))
        }
        userData();
        console.log("aboutMEEEEEEEEEE", data)
    },[]);

    


        return (

            <div className="container-profile"> 


                <div className="profile">
                    
                    <div className="left">

                        <div className="content-left">

                            <img src={catto} />

                            <p className="username">{aboutMe.username}</p>
                            
                            <p className="location">Zürich, Switzerland</p>

                            <button >EDIT PROFILE</button>


                        </div>

                    </div>

                    <div className="right">
                        {/* profile right side container */}

                        <div className="top">
                            {/* About things i like and mail phone */}

                            <div className="about">

                                <div className="about-content">
                                    {/* About */}

                                    <p className="about-title">About</p>
                                    <p className="about-user-text">USER INPUT</p>

                                </div>

                                <div className="email-content">
                                    {/* Mail Phone */}

                                    <div className="email">
                                        <p>Email</p>
                                        <p className="user-email">{aboutMe.email}</p>
                                    </div>

                                    <div className="phone">
                                        <p>Phone</p>
                                        <p className="user-number">aboutMe.</p>
                                    </div>

                                </div>

                            </div>

                            <div className="things-i-like">
                                {/* Things i like */}
                                <p>Things I Like</p>

                                <div className="hobby-buttons-wrapper">
                                <button>Hobby</button>
                                <button>Hobby</button>
                                <button>Hobby</button>
                                <button>Hobby</button>
                                </div>
                            

                            </div>

                        </div>

                        <div className="bottom">

                            <div className="posts">
                                <p className="count" >{aboutMe.amount_of_likes}</p>
                                <p>Posts</p>
                            </div>

                            <div className="likes">
                                <p className="count" >{aboutMe.amount_of_posts}</p>
                                <p>Likes</p>
                            </div>

                            <div className="friends">
                                <p className="count" >{aboutMe.amount_of_friends}</p>
                                <p>Friends</p>
                            </div>

                            <div className="followers">
                                <p className="count" >{aboutMe.amount_of_followers}</p>
                                <p>Followers</p>
                            </div>

                            <div className="following">
                                <p className="count" >{aboutMe.amount_following}</p>
                                <p>Following</p>
                            </div>

                            
                        </div>

                    </div>

                </div>


                

            
            </div>
        );

        }

export default Profile;