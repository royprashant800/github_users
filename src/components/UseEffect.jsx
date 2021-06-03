import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setcount] = useState(0);

    useEffect( () => {
        document.title = `chats(${count})`
    } )

    console.log("this is outside");

    return (
        <div>
            <h1>Today we will learn use effect</h1>
            <button onClick={ () => {setcount(count + 1)} }>Click Mee({count})</button>
        </div>
    )
}

export default UseEffect;
