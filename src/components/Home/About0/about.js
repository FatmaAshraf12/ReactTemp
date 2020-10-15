import React , {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'styled-bootstrap-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import {AboutSection,Title,Title2,Desc ,Users,Bold}from './style.js';


const About = () => {
    const[text,setText] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{setText(res.data)})
    }, [])

    var x;
    const List = text.map((item)=>{
        if(item.id<4){
            return(
                 <Users className="col-md-3 col-xs-12" key={item.id} >
                    <FontAwesomeIcon icon={faLaugh} size="4x" color="grey" />  <br/><br/>                  
                     <Title>{item.username}</Title>
                     <Desc><Bold>Username :</Bold> {item.name}</Desc>
                     <Desc><Bold>Email : </Bold>{item.email}</Desc>
                     <Desc><Bold>Company name : </Bold>{item.company.name}</Desc>
                 </Users>
            )
            }
            x++;

    })
    
  
    return(
        <AboutSection>
            <Container>
                <Title2>Our Team</Title2>
                <br/><br/>
                <Row>
                    {List}
                </Row>
            </Container>
        </AboutSection>

        
    )
}

export default About;