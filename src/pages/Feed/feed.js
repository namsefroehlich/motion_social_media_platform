import React, { Component } from 'react';


import Header from "../../components/header/header";
import Searchbar from "../../components/searchbar/searchbar";
import Posts from "../../components/posts/posts";

class Feed extends Component {

    render () {
        return(
            <>

            <div className="main">

            <Header/>
            <Searchbar/>
            <Posts/>

            </div>

            </>
        );
    }

}

export default Feed;