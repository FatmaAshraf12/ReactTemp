import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col,Container } from 'styled-bootstrap-grid';
import axios from 'axios';
import {ProjectsSection,ProjectsImg,ImgDesc,Title6,ImgP,Overlay,Title0,Title2} from './style.js';

class Projects extends Component {
    state = { project :[] }
    componentDidMount(){
        axios.get("js/data.json").then(res => {{this.setState({project:res.data.Projects})}})
    }
    render(){
        const {project} = this.state;
        const projectsList = project.map((item) =>{
            return(
                <Col md="4"key={item.id}>
                        <ProjectsImg src={item.img} className="img-fluid"/>
                        <ImgDesc>
                            <Title6>{item.title}</Title6>
                            <ImgP>{item.desc}</ImgP>
                        </ImgDesc>
                        <Overlay></Overlay>
                </Col>
            )
        })
    
    return(
        <ProjectsSection>
            <Container>
                <Title0>OUR RECENT WORKS</Title0>
                <Title2>New stunning projects for our amazing clients</Title2>
                <Row>
                   {projectsList}
                </Row>
            </Container>
        </ProjectsSection>
    )
}}

export default Projects;
