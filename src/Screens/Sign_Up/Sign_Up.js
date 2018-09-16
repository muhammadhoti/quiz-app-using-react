import React, { Component } from 'react';
import '../../App.css';

class Sign_Up extends Component {

  constructor(props){
    super(props);
    this.state={
      
    }
    
  }

  signUpPage(){
    const {onPress} = this.props;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    onPress(firstName,lastName,password,email)
  }

  render()
    { 
      
    return (
      
      <div className="row signUpPage">
        <h1 className="singUpPageHeader">Sign Up</h1>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input  id="firstName" type="text" className="validate"/>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" type="text" className="validate"/>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.signUpPage()}}>Sign Up</button>
        </form>
      </div>
      
    );
  }
}


export default Sign_Up;