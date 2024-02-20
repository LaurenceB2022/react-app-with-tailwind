import React from 'react'
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
  return (
        
        <BrowserRouter basename='/web-profile'>
          
            <NavBar/>
            <Router/>
           
        </BrowserRouter>    
        
  );
}
export default App;
