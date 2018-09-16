import React, { Component } from 'react';
import '../../App.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      
    }
    
  }

  login(){
    
    const { onPress } = this.props;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    onPress(email,password)
  }

  render()
    { 
      const { signUpKar } =this.props;
      
    return (
      
      <div className="row loginPage">
        <h1 className="loginPageHeader">Login</h1>
        <form className="col s12">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s12">
            <button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.login()}}>Login</button>
            <br></br>
            <span>
              <small>Don't have An Account ?</small>
              <br></br>
              <button className="btn waves-effect waves-light" type="button" name="action" onClick={signUpKar}>Sign Up</button>
            </span>
          </div>
        </form>
      </div>
      
    );
  }
}


export default Login;