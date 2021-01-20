import React, { Component } from 'react';
import logo from '../../assets/homeFeed/images/logo.png';
import "../../sass/header/header.scss"
import { connect } from 'react-redux';
import postsLogo from '../../assets/homeFeed/images/posts_logo.png';
import iconFriends from '../../assets/homeFeed/svgs/icon-friends.svg';
import notificationBell from '../../assets/homeFeed/svgs/notification_bell.svg';
import menu from '../../assets/homeFeed/svgs/menu.svg';
import jennifer from '../../assets/homeFeed/images/users/jennifer.png';
import iconProfile from '../../assets/homeFeed/images/icon/icon-profile.png';
import iconlogout from '../../assets/homeFeed/images/icon/icon-logout.png';
import {logOutAction} from "../../actions/userLogoutAction";
import { Redirect } from 'react-router-dom'


class Header extends Component {

    state = {
        active: false,
        redirect: false
    }
    
    nextButtonHandler = () => {
        
        console.log(this.props);
        
        this.props.dispatch(logOutAction());
        localStorage.clear();

    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/home/feed' />
        }
      }

    render(){
        return (
            
           

                <header className="first-bar">

                    <div className="left">

                        <div className="logo-left">

                            <img src={logo} alt="" />

                                {this.renderRedirect()}
                                <h1 onClick={this.setRedirect} >Motion</h1>

                        </div>

                        <div className="posts-friends">

                            <div id="posts">

                                <img src={postsLogo} alt="" />
                                <p>Posts</p>

                            </div>

                            <div id="find-friends">

                                <img src={iconFriends} alt="" />
                                <p>Find Friends</p>
                                
                            </div>
                            
                        </div>

                    </div>

                    <div className="right">

                        <div className="dropdown-notification">

                            <img src={notificationBell} alt="" />

                            <div className="dropdown-notification-content">
                                <span></span>
                            </div>
                                
                        </div>

                        <div className="profil-settings">

                            <img src={jennifer} alt="" />                   {/* user.profile.pic */}

                                
                            <div className={ "dropdown" + (this.state.active ? "show" : "")}>                      {/* Dropdown */}
                                <img src={menu} alt="" onClick={() => this.setState({ active: !this.state.active })}/>
                                
                                
                                <div className="dropdown-content">          {/* CollapsingContent */}

                                    <div className="dropProfile">
                                        <img src={iconProfile} alt=""/>
                                        <a href="/home/profile" >Profile</a>                 {/* Profile */} 
                                        
                                    </div>  
                                    
                                    <div className="dropLogout">
                                        <img src={iconlogout} alt=""/>
                                        <span onClick={this.nextButtonHandler} >Logout</span>                     {/* Logout */}
                                        
                                    </div>  

                                </div>
                                
                            </div>

                        </div>

                    </div>

            </header>
        
        
            
        
  
        );
    }
}

function mapStateToProps(state) {

  }
  
  export default connect(mapStateToProps)(Header)