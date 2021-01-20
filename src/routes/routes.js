import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WrapperComponent from "../HOC/AuthComponent";
import LogIn from "../components/authentication/login";
import Feed from '../pages/Feed/feed';
import Register from "../components/authentication/register";
import ProfilePage from "../pages/ProfilePage/profilePage";


const Routes = () => {
    return (
      
        <Router>
            <Switch>
            
            <Route exact path={"/"} component={WrapperComponent(LogIn)} />
            <Route exact path={"/home/feed"} component={WrapperComponent(Feed)} />
            <Route exact path={"/home/registration"} component={Register} />
            <Route exact path={"/home/profile"} component={ProfilePage} />
            

            </Switch>
        </Router>
    );
}
  
  export default Routes;