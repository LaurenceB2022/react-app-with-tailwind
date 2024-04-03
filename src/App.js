import React, {useEffect, useState} from 'react'
import NavBar from './Components/Navbar.jsx'
import {BrowserRouter} from 'react-router-dom'
import Router from './Components/Router.jsx'
import styles from "./index.css"

/* Maintains the context for different functionalities */
export const WebContext = React.createContext();
const ThisContext = (props) => {
  return(
    <WebContext.Provider>
      {props.children}
    </WebContext.Provider>
  )
}

/* Driver function, encapsulates all pages and contexts. */
function App() {

  /*
  //Implement with backend later 
  const callBackendAPI = async () => {
      const response = await fetch('/server')
      const body = await response.json()
      if (response.status !== 200) {
        throw Error(body.message)
      }
      return body
  }
    
    useEffect(() => {
      callBackendAPI()
      .then(res => console.log(res))
      .catch(err => console.error(err))
    }, []) */

  return (
        
        <BrowserRouter basename='/web-profile'>
          
            
            <Router/>
            <NavBar/>
        </BrowserRouter>    
        
  );
}
export default App;
