import React from 'react';
import {Menu} from "./components";
import {Features, Index} from "./Pages";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className='
            flex justify-center
            flex-col w-screen h-auto
            bg-[#181818]
            overflow-hidden
    '>
        <Menu/>

        <Router>
            <Routes>
                <Route index path='/' element={<Index/>}/>
                <Route path='/features/' element={<Features/>}/>
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
