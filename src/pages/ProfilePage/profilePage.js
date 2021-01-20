import React, { Component } from 'react';


import Header from "../../components/header/header";
import Profile from "../../components/profile/index";
import Posts from "../../components/posts/posts";


const ProfilePage = () => {

    return(

            
        <div className="main">
        

        <Header/>
        <Profile/>
        <Posts/>

       
        </div>
    
    );

};

export default ProfilePage;