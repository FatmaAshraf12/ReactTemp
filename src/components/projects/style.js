import styled from 'styled-components';

export const ProjectsSection = styled.section`
    background-color:#f1e7e7;
    height:auto;
    width:100%;
    padding-bottom: 100px;
   padding-top: 150px;
   text-align: center;
`;
export const Title0 = styled.p``;
export const Title2 = styled.h2`
    width:40%;
    font-size:30px;
    margin:auto;
    text-align: center;
    line-height: 40px;
    margin-bottom: 70px;
    font-weight:700;
  
`;




export const ProjectsImg = styled.img`
    height:auto;
    position: relative;
    &:hover {
        $(Overlay){
       display:block;
        }
    }
`;
export const Overlay = styled.div`
    background-color: rgba(230, 73, 73,0.8);
    position: absolute;
    top:0px;
    left:15px;
    right:0px;
    bottom:0px;
    height:284px;
    width:92.3%;
    display: none;
`;

export const ImgDesc = styled.div`
    background-color: #fff;
    border-bottom-style: solid;
    border-bottom-color: #fff;
    border-radius: 2px;
    padding:20px 10px 10px 10px;
`;


export const Title6=styled.h6`
    font-size: 14px;
    font-weight: 100px;
    margin-bottom: 5px;
    line-height: 12px;
`;

export const ImgP = styled.p`
    font-size: 11px;
    line-height: 11px;
    color:#6f6f6f;
`;