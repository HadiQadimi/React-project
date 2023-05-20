
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Card } from "react-bootstrap";

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
            </Card.Body>
            <div className="price">
                <div className="price">
                    {props.disheses.price} قیمت 
                </div>
                <div className="label">
                    {props.disheses.label} برچسب 
                </div>
            </div>

            </Card>
           <header/>
        
        </div>
        </ThemeProvider>
    
    )

}

export default Menuitems;