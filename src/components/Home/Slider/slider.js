import React , {useState,useEffect,Components} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {SliderImg,pad,SliderCaption,Title2,Desc,Br,Button,HomeSection}from './style.js';


const Slider = () => {
    const[text,setText]= useState([])
    
    useEffect(()=>{
        axios.get("js/data.json").then(res=>{setText(res.data.Section1)})
    } , [])

    const List = text.map((item=>{
        return(
            <Carousel.Item key={item.id} className="w-100">
                <SliderImg className="d-block w-100"src={item.img}alt="First slide"/>
                <SliderCaption>
                            <Title2>{item.title}</Title2><Br/>
                            <Desc>{item.desc}</Desc>
                            <Br/>
                            <Button className="btn-1">{item.btn1}</Button>
                            <Button>{item.btn2}</Button>
                </SliderCaption>
        </Carousel.Item>
        )
    }))

        return(
        <HomeSection col xs="12">
                <Carousel className="w-100">
                    {List}
                </Carousel>      
        </HomeSection>    
        );
    
}


export default Slider;

