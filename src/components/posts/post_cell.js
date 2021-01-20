import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {List_all_Posts } from "../../constants/index"
import {likePost, listPost} from "../../actions/postAction"
import React, { Component }  from 'react';
import postReducer from '../store/reducers/postReducer';
import patricia from '../../assets/homeFeed/images/users/patricia.png';
import menu from '../../assets/homeFeed/svgs/menu.svg';
import heart from '../../assets/homeFeed/svgs/heart.svg';
import share from '../../assets/homeFeed/svgs/share.svg';
import Axios from 'axios';
import {like} from "../../constants/index"
import userLoginReducer from "../store/reducers/userLoginReducer"
import {like_post} from "../../constants/index"
import heart_red from "../../assets/svgs/heart.png"


export const One_post = ({data}, props) => {

    let counter = "";
    
    const dispatch = useDispatch();

    const handleLike = () => {

        const postLike = async () => {
            await dispatch(likePost(like_post, data.id, data.content))
        }
        postLike()
        
    };
    
    
    return (data) ? (

        <div className="card" id="post-one">

            

                <div id={`post-${data.id}`}>

                    <div className="profil-name-settings">
                        
                        <div className="left">

                            <img src={data.user.avatar}/>

                            <div className="name-time">

                                <p id="fullname">{data.user.first_name + " " + data.user.last_name}</p>
                                <p id="time">{data.created}</p>

                            {/* <p id="fullname">{username}</p> */}
                            </div>
                        </div>

                        <div className="right">
                            <img className="meta" src={menu} />
                        </div>
                    </div>

                    <div> 
                        <p>{data.content}</p>
                    </div>

                    <div className="postfooter">

                        <div className="like-share">

                            <div className="like">

                                <img src={heart} onClick={() => handleLike()}/>
                                <p>Like</p>

                            </div>  

                            <div className="sharepost">
                                <img src={share}/>
                                <p>Share</p>
                            </div>  

                        </div>

                        <div className="sumLikes">

                            <p>{data.amount_of_likes} {data.amount_of_likes && data.amount_of_likes > 1 ? "likes" : "like"}</p>

                        </div>
                    </div>
                </div>
            
    </div>
    ) : null;

    
}
