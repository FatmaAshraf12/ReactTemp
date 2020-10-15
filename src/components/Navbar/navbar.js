import React , {Components} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Container } from 'styled-bootstrap-grid';
import { NavbarSection , Logo ,LogoText,Linko, UlList ,ListItem} from'./style.js'


const Navbar = () => {
   
        return(
        
            <NavbarSection>
                <Container>
                    <Logo> <LogoText>POFO</LogoText></Logo>
                    <UlList>
                        <ListItem><Linko to="/">Home</Linko></ListItem>
                        <ListItem><Linko to="/About">About</Linko></ListItem>
                        <ListItem><Linko to="/Projects">Projects</Linko></ListItem>
                        <ListItem><Linko to="/Contact">Contact</Linko></ListItem>
                    </UlList>    
                </Container>    
            </NavbarSection>
        );
    
}


export default Navbar;

