import React from "react";
const box ={
width:'80%',
height:'700px',
border:'thin solid purple',
display:'flex',
marginRight:'auto',
marginLeft:'auto',
flexDirection: ''
}
const img = {
    width: '100%',
    height: '300px',
    display:'flex',
    marginTop:'200px',
}


export const Container = () => {
return(



    <div style={box}>
    <img style={img}src='' alt="galaxy"/>
    </div>
)
}