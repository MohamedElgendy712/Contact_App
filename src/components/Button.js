import React from 'react'

function button({content , color}) {
    return (
        <button style={{color: color}}>{content}</button>
    )
}

export default button
