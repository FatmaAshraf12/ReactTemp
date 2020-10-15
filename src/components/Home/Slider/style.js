import styled from 'styled-components';


export const HomeSection = styled.section`
    width:100%;
    height:auto;
    margin-bottom: 100px;
    position: relative;
    top:0px;
    left:0px;
    right:0px;
    bottom: 0px;
    text-align: left;
`
export const pad = styled.div`
padding-right:0px;
padding-left:0px;`

export const SliderCaption = styled.div`
    width:40%;
    position: absolute;
    top:20%;
    height:auto;
    left:10%;
`

export const SliderImg = styled.img``

export const Title2 = styled.h2`    
    font-family: 'Montserrat', sans-serif;
    font-size: 70px;
    font-weight: 700;
    color: #232323;
    letter-spacing: 2px;
    text-align: left;
    line-height: 80px;
`

export const Desc = styled.p`
    font-size: 18px;
    line-height: 26px;
    color: #232323;
`

export const Button = styled.button`
   
    margin-right: 20px;
    border:2px solid #232323;
    border-radius: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight:100px;
    font-size: 11px;
    padding:7px 20px;
    background: ${props => props.btn1? '#232323' : ''};
    color: ${props => props.btn1? '#fff' : ''};


`

export const Br = styled.br``
