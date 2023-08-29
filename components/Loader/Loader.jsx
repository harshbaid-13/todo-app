import React from 'react'
import "./loader.css"
const Loader = () => {
    return (
        <svg className='loader__svg' viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                loading your todos ...
            </text>
        </svg>
    )
}

export default Loader