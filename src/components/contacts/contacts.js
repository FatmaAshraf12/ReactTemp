import React from 'react';

import './contacts.css';

const initialState = {
        fname: "",
        age: null,
        email:"",
        msg:"",
        nameError:"",
        ageError:"",
        emailError:"", 
        msgError:""
  };
class Contacts extends React.Component{
    state = initialState;
     
        myChangeHandler = event => {
            const isCheckbox = event.target.type === "checkbox";
            this.setState({
              [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
            });
          };
        validate = () => {
            let nameError = "";
            let emailError = "";
            let ageError="";
            let msgError="";
        
            if (!this.state.fname) {
              nameError = "name cannot be blank";
            }
        
            if (!this.state.email.includes("@") || (!this.state.email)) {
              emailError = "invalid email";
            }
            
            if ( !this.state.age || (!this.state.age.match(/\d/))) {
                ageError = "Should be numbers";
              } 

            if(!this.state.msg){
                msgError = "msg cannot be blank";
            }
            if (emailError || nameError||ageError || msgError) {
              this.setState({ emailError, nameError,ageError,msgError });
              return false;
            }
        
            return true;
          };
          handleSubmit = event => {
            event.preventDefault();
            const isValid = this.validate();
            if (isValid) {
              console.log(this.state);

              this.setState(initialState);
            }
          };

    render(){
    return(
    <div className="contacts" id="root">
        <div className="container">
            
            <form onSubmit={this.handleSubmit}>
            <h2>Contact Us</h2>
                <label>Full Name</label>
                <input name ="fname" value={this.state.fname} onChange={this.myChangeHandler}/>
                <div className="error-msg">{this.state.nameError}</div>
                <br/>

                <label>Email</label>
                <input name="email" value={this.state.email} onChange={this.myChangeHandler}/>
                <div className="error-msg">{this.state.emailError}</div>
                <br/>

                <label>Age</label>
                <input name="age" value={this.state.age} onChange={this.myChangeHandler}/>
                <div className="error-msg">{this.state.ageError}</div>
                <br/>

                <label>Message</label>
                <input name="msg" value={this.state.msg} onChange={this.myChangeHandler}/>
                <div className="error-msg">{this.state.msgError}</div><br/><br/>

                <button className="submit">Submit</button>

                
            </form>
        </div>
        
    </div>
    );
    }
}


export default Contacts;