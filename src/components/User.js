import { useState, useEffect } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const { name, location } = props;

    console.log("component");
    useEffect(() => {
        console.log("useEffect");

        //called after the component is unmounted
        return () => {
            console.log("useEffect return")
        }
    }, [])


    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>inc count</button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@maneesh01</h4>
        </div>
    )
};

export default User;