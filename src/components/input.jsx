import React, {useState} from 'react';

function Input () {
    const [value, setvalue] = useState("Text one")

    return (
        <div>
            <h1>{value}</h1>
            <input
                type='text'
                value={value}
                onChange={event => setvalue(event.target.value)} 
            />
        </div>
      );
};

export default Input