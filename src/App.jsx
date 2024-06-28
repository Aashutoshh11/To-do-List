// import React from 'react';
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Taskdetails from './Component/Taskdetails';
import Add from './Component/Add';

// import Signup from './Component/Signup';
// import './Style/Home.css';  
// import './Style/Sidebar.css';  
// import Home from './Component/Home';   
// import Sidebar from './Component/Sidebar';
// import './Style/Signup.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:tid' element={<Taskdetails/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;