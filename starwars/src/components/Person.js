import React from "react";
import { Alert } from 'reactstrap';

const Person = props => {

    return(
    <div>
        <Alert color="danger">
        {props.info.name}
    
      </Alert>
      <Alert color="info">{props.info.birth_year} </Alert> 
    
      


    </div>
    )} 


    export default Person;