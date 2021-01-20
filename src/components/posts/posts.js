import React, { Component, useState } from 'react';
import "../../sass/posts/posts.scss";
import axios from "axios"
import {postCreate} from "../../constants/index"
import {postAction} from "../../actions/postAction"
import {Create_new_Post} from "../../constants/index"
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {List_all_Posts } from "../../constants/index"
import {listPost} from "../../actions/postAction"

import postReducer from '../store/reducers/postReducer';
import {One_post} from "./post_cell"

//svg
import sendButton from '../../assets/homeFeed/svgs/send_button.svg';
import menu from '../../assets/homeFeed/svgs/menu.svg';
import heart from '../../assets/homeFeed/svgs/heart.svg';
import share from '../../assets/homeFeed/svgs/share.svg';

//png
import jenniferPb from '../../assets/homeFeed/images/users/jennifer.png';
import image1 from '../../assets/homeFeed/images/feedPics/image1.png';
import image2 from '../../assets/homeFeed/images/feedPics/image2.png';
import image3 from '../../assets/homeFeed/images/feedPics/image3.png';
import image4 from '../../assets/homeFeed/images/feedPics/image4.png';
import patricia from '../../assets/homeFeed/images/users/patricia.png';
import alber from '../../assets/homeFeed/images/users/alber.png';
import leticia from '../../assets/homeFeed/images/users/leticia.png';
import large_image from '../../assets/homeFeed/images/feedPics/large_image.png';



export const Posts = (props) => {

    let posts = []
    const dispatch = useDispatch();
    const [newPost, setNewPost] = useState("")
    const [images, setImages] = useState()    

    const postsAllChron = useSelector((state) => state.post.postsAllChron)

    console.log(postsAllChron);
    
    const txtInputHandler = (event) => {
        setNewPost(event.currentTarget.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const body = `{ "content": "${newPost}" }`;
        dispatch(postAction(body, Create_new_Post))
    }

    useEffect(() => {
        const postData = async () => {
            await dispatch(listPost(List_all_Posts))
        }
        postData();
    },[]);

    for (let i = 0; i < postsAllChron.length; i++) {
        
        posts.push(<One_post key={postsAllChron[i].id} data={postsAllChron[i]}></One_post>)
    
    }

    

    
    return (

        <div className="wrapper">


            <div className="onmind card">

            <img id="pb" src={jenniferPb} />
            <input type="text" id="newpost" placeholder="What's on your mind, Jennifer?" onChange={txtInputHandler}/>
            <img id="sendButton" src={sendButton} onClick={submitHandler}/>

            </div>

            {posts}

            {/* <div className="cards-left"> */}

                

                

            

            {/* <div className="card" id="post-one">
        
                <div className="profil-name-settings">

                    <div className="left">

                        <img src={jenniferPb}/>

                        <div className="name-time">

                            <p id="fullname">Jennifer Smith</p>
                            <p id="time">Just now</p>

                        </div>
                        
                    </div>

                    <div className="right">
                        <img className="meta" src={menu} />
                    </div>

                </div>

                <div> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere ex commodi minima aspernatur...</p>
                </div>

                <div className="feedpics">

                    <img src={image1}/>
                    <img src={image2}/>
                    <img src={image3}/>
                    <img src={image4}/>
                    

                </div>

                <div className="postfooter">

                    <div className="like-share">

                        <div className="like">

                            <img src={heart}/>
                            <p>Like</p>

                        </div>  

                        <div className="sharepost">
                            <img src={share}/>
                            <p>Share</p>
                        </div>  

                    </div>

                    <div className="sumLikes">

                        <p>2 likes</p>

                    </div>
                </div>

            </div>

        </div> */}

        <div className="cards-right">

            {/* <div className="card" id="post-two">

                <div className="profil-name-settings">

                    

                    <img src={patricia}/>

                    <div className="name-time">

                        <p id="fullname">Patricia Jindal</p>
                        <p id="time">6h ago</p>
                    </div>
                        
                    

                </div>

                <div className="lorem">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore eveniet nobis consequuntur...</p>  

                </div>

                <div className="postfooter">

                    <div className="like-share">

                        <div className="like">

                            <img src={heart}/>
                            <p>Like</p>

                        </div>  

                        <div className="sharepost">
                            <img src={share}/>
                            <p>Share</p>
                        </div>  

                    </div>

                    <div className="sumLikes">

                        <p>2 likes</p>

                    </div>
                </div>

            </div>

            <div className="card" id="post-three">

                <div className="pb-name">

                    <img src={alber}/>

                    <div className="name-time">

                        <p id="Fullname">Albert Lawrence</p>

                        <p id="time">June 20</p>

                        

                    </div>

                    <div id="sharedPost">
                        <p>shared post</p>
                    </div>

                </div>

                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas nostrum....</p>
                </div>

                

                <div className="repost">

                    <div className="pb-name">

                        <img src={leticia}/>

                        <div className="name-time">

                            <p id="Fullname">Leticia Suarez</p>

                            <p id="time">June 19</p>

                            

                        </div>

                    </div>

                    <div className="loremtext">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto non dolorum</p>
                    
                    </div>

                    <div className="pic">

                        <img src={large_image}/>

                    </div>

                

                    <div className="postfooter">
    
                        <div className="like-share">
        
                            <div className="like">

                                <img src={heart}/>

                                <p>Like</p>

                            </div>

                            <div className="sharepost">

                                <img src={share}/>

                                <p>Share</p>
                                
                            </div>
        
                        </div>
        
                        <div className="sumLikes">
        
                            <p>10 likes</p>
        
                        </div>  
                    </div>
                </div>*/}




            {/* </div> */}
        
        </div>
         
    </div>
    );
    

}
export default Posts;
