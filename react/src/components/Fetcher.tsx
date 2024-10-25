import { useEffect, useState } from 'react';

function Fetcher() {
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
            throw new Error('Could not fetch data');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        };

        fetchData();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
        <h1>User List</h1>
        <ul>
            {users.map((user) => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default Fetcher;