import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";


import Parent from './components/Parent';
import BookList from './components/BookList';
import Car  from './components/Car';
import HookCounterOne from './components/HookCounterOne';
import EventHandler from './components/EventHandler.jsx';
import Form from './components/Form.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
function App() {
    return (
        <div>
            <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    {/* <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                */}</Route> 
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
            <Form/>
            <Parent />  {/* Render the Parent component */}
            <BookList/>
            <Car/>
            <HookCounterOne/>
            <EventHandler/>
        </div>
    );
}

export default App;