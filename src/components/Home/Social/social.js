import React ,{useState, useEffect}from 'react';
import axios from 'axios';
import {SociaMedia,SociaDiv,SocialP,Info1,Info2,Icon} from './style.js';

const Social = () =>{

    const[text,setText] = useState([])

    useEffect(()=>{
        axios.get('js/data.json').then(res => {setText(res.data.Social)})
    }  , [])

    const SocialText = text.map((TextItem)=>{
        return(
            <SociaDiv key={TextItem.id} x={TextItem.site}>
                <Icon className={TextItem.icon}></Icon>
                <SocialP>
                    <Info1>{TextItem.title}</Info1>
                    <Info2>{TextItem.p}</Info2>
                </SocialP>
            </SociaDiv >
        )
    })


    return(
        <SociaMedia>
           {SocialText}
        </SociaMedia>

    )
}

export default Social;