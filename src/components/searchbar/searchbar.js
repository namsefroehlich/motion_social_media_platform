import React, { Component } from 'react';
import "../../sass/searchbar/searchbar.scss";

import searchIcon from "../../assets/homeFeed/svgs/search_icon.svg"

class Searchbar extends Component {

    render() {
        return (

            
                
                <div className="search">

                    <div className="left">
                        
                        <img src={searchIcon} />
                        <input type="text" id="search" value="Search posts..."/>

                    </div>

                    <div className="right">


                            <div className="liked">                     

                                <p>Liked</p>

                            </div>

                            <div className="friends">

                                <p>Friends</p>

                            </div>

                            <div className="follow">

                                <p>Follow</p>

                            </div>

                    </div>

                </div>

            
        );
    }
}
export default Searchbar;