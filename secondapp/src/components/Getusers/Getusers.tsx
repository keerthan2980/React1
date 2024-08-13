// calling api using fetch method inreact 
import React, { useState, useEffect } from 'react';
interface User { //in interface we can write how many attributes we needed to call based on user
      id: number;
      name: string;
      username: string;
      email: string; 
      //this attributes are present in api
      website:string;
    }
    export const GetUsers = () => {    
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState('');
    
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') //it is a website where we can get fake apis to use 
        .then(res=>{
            if(!res.ok){
                throw new Error('Network Error');
            }
            return res.json();
        })
        .then(data=>setUsers(data))
        .catch(err=>setError(err.message));
    },[]);
    if (error){
        return <div>Error:{error}</div>;
    }
          

      return (
        <div>
          <h1>This are the users from the json api using Fetch method</h1>  {/*we can make styles */}
          <ul>
            {users.map(user => (                          
              <li key={user.id}> <br/>
                 Name:{user.name}<br/>
                 Username: {user.username}<br/> 
                 Email: {user.email} <br/>
                {/* we can display what we need from api(print)*/}
                  Websites are : {user.website}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    