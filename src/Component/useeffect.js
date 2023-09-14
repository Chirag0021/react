import React ,{useState,useEffect} from 'react';

function Useeffectfirst()
{
    const [counter,setcounter] = useState(0);

    const increment = () =>{
        setcounter(counter+1);
    }
    useEffect(() =>{console.log(`Counter changed: ${counter}`)},[counter]);
    return(
        <div>
        <h2>Parent component</h2>
        <h2>Counter value :{counter}</h2>
        <button onClick={increment}>Increment</button>
        <Child counter={counter}/>
        </div>
    );
}

function Child({counter}) {
    return(
        <div>
            <h3>Child component</h3>
            <p>counter from parent :{counter}</p>
        </div>
    )    
}

export default Useeffectfirst;