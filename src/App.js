import React from 'react'
import NavBar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <h1 className='text-2xl font-bold'>Welcome!</h1>
    </div>
  );
}
export default App;
