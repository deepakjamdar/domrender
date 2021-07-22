import React, { useState } from 'react';
import SubChild from './subchild';

function Child() {
    const [count, setCount] = useState(0);
    console.log("child render");
    return (
        <div>
            <h1>Child Dom</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>You Child clicked {count} times</p>
            <SubChild />
        </div>
    )
}

export default Child;