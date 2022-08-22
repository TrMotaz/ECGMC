import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Container } from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal'


function appNavBar () {
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler/>
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
          <NavItem color='white'>
            <RegisterModal />
          </NavItem>
          <NavItem style={{color:"red"}}>
            <LoginModal/>
          </NavItem>
        </Nav>
        </Collapse>  
        </Container>
      </Navbar>
      
    </div>
  )
}

  



export default appNavBar