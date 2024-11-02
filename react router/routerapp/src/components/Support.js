import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Support = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/labs")
    }

    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
         <div>Support Page</div>
         <button onClick={clickHandler}>Move to Labs page</button>
         <button onClick={backHandler}>Go Back</button>
    </div>
   
  )
}
