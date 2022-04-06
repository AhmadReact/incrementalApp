import React, { useState } from "react";

function App() {

  const [counter,setCounter] = useState(0)


  const incre = () =>{

    setCounter(counter+1);



  }

  const decre = () =>{

if(counter==0)
{

alert("Counter can never be -negative.")

}
else{
    setCounter(counter-1);
  }
  }



  return (
    <div className="container">
 
      <div className="label">

        <h1>{counter}</h1>

      </div>
    <div className="btn">

    <button onClick={incre}>Increment</button>

    <button onClick={decre}>Decrement</button>

    </div>

    </div>
  );
}

export default App;
