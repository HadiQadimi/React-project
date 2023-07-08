import React from "react";
import { Card } from "react-bootstrap"; 
import Dishcomment from "./Dishcomment";
const DishDetail= props =>{
    return(
        <div>
            <Card>
                <Card.Img variant="top"  src={props.Dish.image} />
                <Card.Body>
                <Card.Title >{props.Dish.name}</Card.Title>
                <Card.Text>{props.Dish.description}
                </Card.Text>
                </Card.Body><p><b>قیمت: {props.Dish.price}</b></p>
                <p><b>برچسب :   {props.Dish.label}</b></p>
                <p><b>دسته بندی:{props.Dish.category}</b></p>
                <Dishcomment comment={props.Dish.comments} />
            </Card>

        </div>
    )
}
export default DishDetail;