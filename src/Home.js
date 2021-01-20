import React from 'react';

import { store } from './components/store';

const token = localStorage.getItem("token")
if(token) {
  store.dispatch({type: "USER_TOKEN", payload: token})
}

const Home = () => {
  return (

    
    <></>

    
  );
}

export default Home;

