import React from 'react';
import Child from './Child';
import Counter from './Counter';

function Parent() {
    return (
        <div>
            <h1>Welcome to the Parent Component!</h1>
            <Child name="John" />  {/* Passing the 'name' prop with value "John" */}
            <Counter/>
        </div>
    );
}

export default Parent;