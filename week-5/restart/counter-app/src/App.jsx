import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomCounterButton count= {count} setCount = {setCount}></CustomCounterButton>
    </div>
  )
}


function CustomCounterButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onClickHandler}>Counter {props.count}</button>
  )

}

export default App
