import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'styled-bootstrap-grid';
import {Creative,CreativeInfo, InfoTiltle, TitleSpan,InfoH,InfoDesc ,Linko} from './style.js';
const Join = () =>{
    return(
        
        <Creative>
            <Container>
                <CreativeInfo>
                    <InfoTiltle><TitleSpan>This is</TitleSpan> OUR COMPANY</InfoTiltle>
                    <InfoH>Join Us</InfoH>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Linko>explicabo</Linko> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </Container>
        </Creative>

    )
}

export default Join;

