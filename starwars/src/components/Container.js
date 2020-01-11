import React from "react";
const style = {
    color: 'red',
    background: 'white'
}


export const Container = (props) => {

  return (
     <div style={style}> 

         <p> {props.person1.name}</p> 
  <p>Height: {props.person1.height}</p>
  <p>Mass: {props.person1.mass}</p>
      </div>
)
}