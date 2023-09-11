import React from 'react'

const Input = ({ type, value, name, placeHolder,className }) => {
    return (
        <input
            type={type}
            value={value}
            name={name}
            placeholder={placeHolder}
            className={className}
        />
    )
}

export default Input