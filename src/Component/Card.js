import React, { useState } from 'react';

export default function Card (){
    const [flipSide, setFlipSide] = useState(false)

    return (
        <div className="cardBox">
            {
                flipSide ? <div className="cardParent" onClick={setFlipSide(false)}><p>Sample card text-BACK</p></div> : <div className="cardParent" onClick={setFlipSide(true)}><p>Sample card text-FRONT</p></div> 
            }
            <div className="cardParent" onClick={setFlipSide(true)}>
                <p>Sample card text-FRONT</p>
            </div> 
        </div>  
        )
}