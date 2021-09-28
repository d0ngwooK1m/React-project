import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => {
            setCount(count + 1);
            console.log({count}, {setCount});
            }}>
         Click me
        </button>
      </div>
    );
}

export default Example;