import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Хук стану для зберігання значення лічильника
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Лічильник: {count}</h1>
            <button onClick={increment}>Збільшити</button>
        </div>
    );
};
export default Counter;