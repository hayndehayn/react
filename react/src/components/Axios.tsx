import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
            };
            fetchData();
    }, []);

    return (
        <div>
            {loading && <p>Завантаження даних...</p>}
            {error && <p>Помилка: {error}</p>}
            {data && (
                <div>
                {/* Відображаємо дані тут. Наприклад: */}
                {data.map(item => (
                    <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}

export default MyComponent;