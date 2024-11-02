import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        //Move to about page
        navigate("/about");
    }
    return (
        <div>
            <div>Labs Page</div>
            <button onClick={clickHandler}>Move to About Page</button>
        </div>

    )
}
