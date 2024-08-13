import React from 'react';
import './App.css';
import Hello from './components/message';
//import { Form } from 'react-bootstrap';
import { FirstForm } from './components/forms';
import { GetUsers } from './components/Getusers/Getusers';
import { Getbyaxios } from './components/Getusers/Axios';


function App() {
  return (
    <>
      <h1>Welcome to React</h1>
       {/*<Hello></Hello>
      <FirstForm></FirstForm>

       <Getbyaxios></Getbyaxios> 
         */}
       <GetUsers></GetUsers>
      
    </>
  );
}

export default App;
