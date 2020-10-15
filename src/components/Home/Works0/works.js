import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import {WorkSection,P,Div ,Img,Title3}from './style.js';
import './owl.css';  

class Works extends Component {
    state = { project :[] }
    componentDidMount(){
        axios.get("js/data.json").then(res => {{this.setState({project:res.data.Projects})}})
    }
    render(){
        const {project} = this.state;
        const projectsList = project.map((item) =>{
            return(
                <Div key={item.id}>
                        <Img src={item.img}/>
                </Div>
            )
        })
    
    return(
        <WorkSection>
                <P>OUR RECENT WORKS</P>
                <Title3>New stunning projects for our amazing clients</Title3>
                

                <Div className='container-fluid' >            
                    <OwlCarousel items={4} className="owl-theme"  loop  nav  margin={8} autoplay="true" >  
                        <Div ><Img  data-merge="1"className="img" src= {'images/home/projects/1.jpg'}/></Div>  
                        <Div><Img  data-merge="1" className="img" src= {'images/home/projects/2.jpg'}/></Div>  
                        <Div><Img  data-merge="1"className="img" src= {'images/home/projects/3.jpg'}/></Div>  
                        <Div><Img  data-merge="1"className="img" src= {'images/home/projects/4.jpg'}/></Div>  
                        <Div><Img data-merge="1"className="img" src= {'images/home/projects/5.jpg'}/></Div>  
                        <Div><Img data-merge="1"className="img" src= {'images/home/projects/6.jpg'}/></Div> 
                    </OwlCarousel>  
                </Div>
        </WorkSection>
    )
}}

export default Works;
