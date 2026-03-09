import React from 'react';
import Parent from './components/Parent';
import BookList from './components/BookList';
import Car  from './components/Car';
import HookCounterOne from './components/HookCounterOne';
function App() {
    return (
        <div>
            <Parent />  {/* Render the Parent component */}
            <BookList/>
            <Car/>
            <HookCounterOne/>
        </div>
    );
}

export default App;