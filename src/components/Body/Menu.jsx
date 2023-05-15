import React, { Component } from 'react'
import dishes from '../../data/Dishes.js';
import Menuitems from './Menuitems.jsx';
import Product from './Product.jsx';
import DishDetail from './DishDetail.jsx';
import MediaQuery  from "react-responsive";
import { Container , Row, Modal, Button } from "react-bootstrap";

export class Menu extends Component {
    state={
        DISHES:dishes,
        selecteddish:null,
        show:false
    }
    modalclose=() => this.setState({show:false});
    modalopen=()  => this.setState({show:true});
    ondishselected=dish =>{
      this.setState({selecteddish:dish, show:!this.state.show});
    }
  render() {
    document.title="محصولات";
     const dish=this.state.DISHES.map(item =>{
        return(
            <Menuitems disheses={item} key={item.id} 
              ondish={ () => this.ondishselected(item) }   />
        )
     })
     
     let dishdetail=null;
     if(this.state.selecteddish !=null ){
      dishdetail=<DishDetail Dish={this.state.selecteddish}/>
     }
    return (
      <Container   fluid={true} >
      
        <div className='respons' >
           {/* <Row lg={5} md={3} sm={2} xsm={1}></Row>*/}
            {dish}

        </div>
        <Modal size="lg" show={this.state.show} onHide={this.modalclose}>
       
        <Modal.Body>
        {dishdetail}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalclose}>
            بستن پنجره
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
        
      
    )
  }
}

export default Menu
