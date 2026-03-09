import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Click {count} me
        </button>
    );
}
export default Counter;