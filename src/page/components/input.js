import React, { useRef } from 'react';

const Input = (props) => {
    const ref = useRef(null);
    const changeHandler = () => {
        console.log(ref.current.value);
    }
    return (
        <input
            type={props.type} 
            ref={ref} 
            onChange={()=>props.changeHandler(props.id,ref.current.value)}
            className={props.className}
            placeholder={props.placeholder}
        />
    )
}

export default Input;

