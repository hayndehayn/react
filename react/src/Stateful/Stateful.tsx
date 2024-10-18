import React, { useState } from 'react';

const Stateful: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Stateful;
