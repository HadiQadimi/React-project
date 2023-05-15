import React, { Fragment } from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Card, Container } from "react-bootstrap";
import header from '../../style.css/header.css';
const Menuitems= props=>{
    //console.log(props);
    return( 
        <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">

        <div className="menuitem" >
    
            <Card className="card"  >
      <Card.Img variant="top"  style={{cursor:"pointer"}} src={props.disheses.image} onClick={props.ondish} />
      <Card.Body>
        <Card.Title style={{cursor:"pointer"  , color:"yellowgreen"}} onClick={props.ondish} >{props.disheses.name}</Card.Title>
        <Card.Text>{props.disheses.description}
        </Card.Text>
      </Card.Body><p><b>قیمت: {props.disheses.price}</b></p>
                 <p><b>برچسب:   {props.disheses.label}</b></p>
    </Card>
           <header/>
        
        </div>
        </ThemeProvider>
    
    )

}

export default Menuitems;