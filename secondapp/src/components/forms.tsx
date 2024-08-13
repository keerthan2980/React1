import React, { FormEvent, useRef } from 'react'
export const FirstForm=()=>{
    const person={name:'keerthan',age:21}

    return (

      <form>
        <label>enter the name:
            <input type="text" value={person.name}/>
        </label>
        <label>enter the age:
            <input type="number" value={person.age}/>
        </label>
      </form>
    )

} 
