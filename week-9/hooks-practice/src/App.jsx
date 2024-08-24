import { Component, useEffect, useState } from 'react'
import './App.css'

function App() {
    const [render, setRender] = useState(true);
    useEffect(()=>{
        setInterval(()=>{
            setRender(r => !r);
        },3000);
    },[]);
    return <>
        {render?<MyComponent />:<div>2nd div</div>}
        {render?<MyClassComponent />:<div>2nd div</div>}
    </>
}

function MyComponent() {
    useEffect(() => {
        console.info("Component mounted")
        return () => {
        console.info("Component unmounted")
      };
    }, []);

    return <div>
        from inside my Component
    </div>
}

class MyClassComponent extends Component {
    componentDidMount() {
      // Perform setup or data fetching here
      console.log("mounted")
    }
  
    componentWillUnmount() {
      // Clean up (e.g., remove event listeners or cancel subscriptions)
      console.log("unmounted")
    }
  
    render() {
    }
  }

export default App
