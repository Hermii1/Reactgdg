import { useState } from "react";
export default function Greeting({name ,email}){
    const [age,setAge]=useState(16)
    const [time,setTime]=useState(2)
    return (<div>
        <p onClick={e=>console.log("Clicked")}>my name is {name}</p>
        <p onClick={
            (e)=>setAge(age+1)
        }>Age {age}</p>
        
        <p onClick={
            (e)=>setTime(0)
        }>time {time}</p>
      

    </div>
    );
}