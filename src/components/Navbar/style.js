import styled from "styled-components"
import { NavLink } from 'react-router-dom';

export const NavbarSection = styled.div`
padding: 5px 0;
overflow: hidden;
opacity:0.8;
position:absolute;
width:100%;
z-index:999999;
`
  
export const Logo = styled.div`
    width: 50%;
    float: left
`

export const LogoText= styled.h2`
    font-size: 24px;
    font-weight: bold;
    
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding:0px;
`
export const ListItem = styled.li`
    display: inline-block;
`

export const Linko = styled(NavLink) `
    display: block;
    color: #000;
    text-decoration: none;
    padding: 10px 30px;
    font-weight: bold;

    &:hover{
        color: #eb5424;
    }
    &:focus{
        color:red;
    }
`
