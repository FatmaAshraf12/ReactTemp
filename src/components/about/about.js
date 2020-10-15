import React , {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';


class About extends Component{
    state = {about:[]}

    componentDidMount(){
        axios.get("js/data.json").then(res => {{this.setState({about:res.data.About})}})
    }
    render(){
        const {about}=this.state;
        const aboutList = about.map((item)=>{
            return(
                <div className="caption col-md-4 col-xs-12" key={item.id}>
                    <h3 className="num">{item.number}</h3>
                    <h3 className="title">{item.title}<br/>{item.title2}</h3>
                    <p className="paragraph-1">{item.desc}</p>
                </div>
            )
        })
    return(
        <section className="aboutt">
            <h4 className="titlee">About US</h4>
        

        <div className="about-1">
            
            <div className="row">
                <img src="images/about/1.jpg" className="col-md-6 col-xs-12"/>
                <div className="caption col-md-6 col-xs-12">
                    <h3>We are loved team</h3><br/><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since</p>
                 
             </div>
            
            </div>
        </div>
        <div className="container">
            <div className="row">
               {aboutList}
            </div>
        </div>
        </section>
    )
    }
}

export default About;