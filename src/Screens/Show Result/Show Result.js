import React, { Component } from 'react';
import '../../App.css';

class ShowResult extends Component {

  constructor(props){
    super(props);
    this.state={
      mainCategory : this.props.selected[0],
      subCategory : this.props.selected[1],
      quizCategories : this.props.quizes
    }
    
  }


  render()
    { 
      const {mainCategory,subCategory,quizCategories} = this.state;
      const name = quizCategories[mainCategory].name + " " + quizCategories[mainCategory].subCategories[subCategory].name;
    return (
      
      <div className="resultBox">
        <h1 className="resultHeader">Result</h1>
        <li>First Name : {localStorage.getItem('firstName')}</li>
        <li>Last Name : {localStorage.getItem('lastName')}</li>
        <li>Your Score : {localStorage.getItem(name)}</li>
        <li>Date Taken : {localStorage.getItem(name+' date:')}</li>
      </div>
      
    );
  }
}


export default ShowResult;