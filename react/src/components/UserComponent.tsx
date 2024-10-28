import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserData {
    id: number;
    name: string;
    email: string;   
}

function UserComponent() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);   

        try {
            const response = await axios.get<UserData>('https://jsonplaceholder.typicode.com/users/1');
            setUserData(response.data);
        } catch (error) {
            setError('Сталася помилка при завантаженні даних');
        } finally {
            setIsLoading(false);
        }
        };

        fetchData();
    }, []);

    return (
        <div>
        {isLoading ? (
            <p>Завантаження даних...</p>
        ) : error ? (
            <p>Помилка: {error}</p>
        ) : (
            <div>
            <h2>Інформація про користувача</h2>
            <p>Ім'я: {userData?.name}</p>
            <p>Email: {userData?.email}</p>
            {/* Додайте інші поля за необхідності */}
            </div>
        )}
        </div>
    );
}

export default UserComponent;