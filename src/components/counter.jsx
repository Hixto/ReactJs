import React, { useState } from 'react';

function Counter() {
    const [count, setcount] = useState(0)

    function Increment() {
        setcount(count + 1)
    }
    function Decrement() {
        setcount(count - 1)
    }

}

export default Counter;