import React,{useState,useEffect} from "react";
import './counter.css'
function Counter(){

    const [Count ,setCount] = useState(0);

    function showcountvalue(){

     console.log(`value of count is : ${Count}`)
    }
    useEffect(showcountvalue,[Count])

    function increase(){
        setCount(Count+1)
        
    }
    function decrease(){
        setCount(Count-1)

    }
    return(
        <>
        <h1 className="text-name">Counter App</h1>
        <div className="count-button">
        <button onClick={increase} className="spe-btn" >Increase</button>
        <span id="counter" className="count" >Count:{Count}</span>
        <button onClick={decrease} className="spe-btn">Decrease</button>
        </div>
        </>
    )
}
export default Counter