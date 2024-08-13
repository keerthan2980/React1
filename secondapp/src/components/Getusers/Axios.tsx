//you have to install axios for runing 
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website:string;
}

export const Getbyaxios = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
                console.log(res.data);
                setUsers(res.data);
            } catch (err) {
                setError((err as AxiosError).message);
            }
        }
        fetchUsers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>This are the users from the json api using Axios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <br />
                        Name: {user.name}<br />
                        Username: {user.username}<br />
                        Email: {user.email}<br />
                        {/* Displaying additional information like websites if needed */}
                        Websites are : {user.website}
                    </li>
                ))}
            </ul>
        </div>
               );
};