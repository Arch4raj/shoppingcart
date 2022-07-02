import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useState } from 'react';


import {Navbar,Container, Nav,NavDropdown,Button,Card, NavItem} from 'react-bootstrap';

import { color } from '@mui/system';


export default function App() {
  
  const list=[
    {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"Fancy Product",
    rating:"null",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"Special Item",
    rating:"5",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"sale Item",
    rating:"null",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"Popular Item",
    rating:"null",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"Fancy Product",
    rating:"4",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"Special Item",
    rating:"null",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"sale Item",
    rating:"5",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
  {
    size:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title:"Popular Item",
    rating:"null",
    text:" $40.00 - $80.00",
    pricecut:"null"
  },
]

const[cartvalue,setcartvalue]=useState(0);
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Shop" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
     </Nav>
     
     <Button className='button ms-auto' variant="outline-dark">
     <Badge badgeContent={cartvalue} color="error">
     Cart <ShoppingCartIcon />
    </Badge>
    </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div className='header'>
  <div >
  <p className='header-content'>Shop in style</p>
  <p className='sub-head'>With this shop hompeage template</p>
  </div>
  </div>

     <div className='card-content'>
     {list.map((lc)=><Shop obj={lc}  cartvalue={cartvalue} setcartvalue={setcartvalue}/>)}
     </div>
    
     </div>
    );  
   } 

   
   function Shop({obj,cartvalue,setcartvalue}){
    const [cart,setcart]=useState(true)
    const addcart=()=>{
       setcart(!cart)
       setcartvalue(cartvalue+1)
    }
     const removecart=()=>{
      setcart(!cart)
      setcartvalue(cartvalue-1)
     }
      return(
        <div > 
 
<div >
<Card style={{ width: '15rem',height:"340px" }}>
  <Card.Img variant="top" src={obj.size} />
  <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>{obj.title}</Card.Title>
<div className='space'>
<Card.Text>
   {obj.text}
    </Card.Text>
    {typeof(obj.rating)!=null ? <p >{"⭐".repeat(obj.rating)}</p>:null}
</div>
   
    <div className='button-space'>
   {cart ?<Button  variant="outline-dark"  onClick={()=>addcart()}>Add to cart</Button>
:<Button  variant="outline-dark"  onClick={()=>removecart()}>Removecart</Button>
   } 
    </div>
  </Card.Body>
</Card>
 
 </div>
        </div>
      )
    }