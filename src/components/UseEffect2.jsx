import React, {useEffect, useState} from 'react'

const UseEffect2 = () => {
    const [width, setwidth] = useState(window.screen.width)

    const getSize = () => {
        setwidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', getSize);

        return () => {
            window.removeEventListener('resize', getSize);
        }
    })

    return (
        <div>
            <p>size of window is:</p>
            <h1>{width}</h1>
        </div>
    )
}

export default UseEffect2
