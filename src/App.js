import React , {useState} from 'react';
import './App.css'; 

function App() {
  let [count, setCount] = useState(0);
  return (
    <div >
<h1>Assalam o Aleikum</h1>
<h2>React Hooks and State Use State and use of Arrow Function ()=></h2> 
<hr></hr>    
<h3>Value of counter is : {count}</h3> 
  
  <button onClick= { 
    ()=> setCount(count+1)
  }>Update Counter</button>
    </div>
  );
}

export default App;
