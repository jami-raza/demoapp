import React from 'react';

function Dinner (props){
    return (
       <div>
            <h1>Today we are serving{props.dishname}</h1>
            <h2>Today sweet dish {props.sweetdish}</h2>
            
       </div>
    );
   
}

export default Dinner;