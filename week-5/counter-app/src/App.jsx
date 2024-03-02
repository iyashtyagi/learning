import { useState } from "react";

// One way
// function App() {

//   const [count, setCount] = useState(0);

//   function updateCount(){
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={updateCount}>Counter {count}</button>
//     </div>
//   )
// }

// Another way

function App(){
  const [count, setCount] = useState(0);

  return <div>
    <CustomButton count = {count} setCount = {setCount}></CustomButton>
  </div>
}

function CustomButton(prop){
  console.log(prop);

  function updateCount(){
    prop.setCount(prop.count + 1);
  }

  return <button onClick={updateCount}>
    Counter {prop.count}
  </button>
}

export default App
