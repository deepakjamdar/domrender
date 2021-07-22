import React, { useState } from 'react';

function SubChild() {
    const [count, setCount] = useState(0);
    console.log("Sub child render");
    return (
        <div>
            <h1>Sub Child Dom</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>You Sub Child clicked {count} times</p>
        </div>
    )
}

export default SubChild;