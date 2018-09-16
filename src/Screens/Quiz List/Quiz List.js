import React, { Component } from "react";
import "../../App.css";
import swal from 'sweetalert';

class QuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList : true,
      securityCheck : false,
      quizStarted : false,
      quizCategories : this.props.quizes
    };
  }

  selectedQuiz(index){
    this.setState({quizList: false})
    this.setState({mainCategory : index});
  }

  securityCheck(index){
    this.setState({subCategory : index,securityCheck : true})
  }

  securityClearance(){
    if (document.getElementById("securityKey").value === "90283e9a")
    {
      const {mainCategory, subCategory, quizCategories} = this.state
      const name = quizCategories[mainCategory].name + " " + quizCategories[mainCategory].subCategories[subCategory].name;
      const check = localStorage.getItem(name)
      
      check ?
      this.props.alreadyGiven(mainCategory,subCategory)
      :
      this.newComp()
    }
    else{
    swal("Access Denied", "Enter Correcy Key i.e : 90283e9a")
    }
  }

  newComp(){
    const {mainCategory,subCategory} = this.state;
    const {onPress} =this.props
    this.setState({securityCheck:false})
    onPress(mainCategory,subCategory)
  }

  render() {
    const { quizes } = this.props;
    const { quizList, mainCategory, subCategory, securityCheck, quizStarted } = this.state;
    return (
      <div>
        { quizList &&
          <div>
            <h1 className="quizListHeader">QUIZ LIST</h1>
            <div>
            <ul className="quizList">
              {
                quizes.map((value, index) => {
                  return (
                  <li>
                    <a>{value.name}
                    <br></br>
                      <span><button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.selectedQuiz(index)}}>Take Quiz</button></span>
                    </a>
                  </li>
                )
                })
              }
            </ul>
            </div>
            </div> }
          {!quizList && !securityCheck && !quizStarted &&
          <div>
            <h1 className="quizListHeader">{quizes[mainCategory].name}</h1>
            <div>
            <ul className="quizList">
              {
                quizes[mainCategory].subCategories.map((value, index) => {
                  return (
                  <li>
                    <a>{value.name}</a>
                    <br></br>
                    <small>Weightage : {value.weightage}</small>
                      <span><button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.securityCheck(index)}}>Start Quiz</button></span>
                  </li>
                )
                })
              }
            </ul>
            </div>
          </div>
        }
        {
          securityCheck && 
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="securityKey" type="text" className="validate"/>
                  <label htmlFor="securityKey">Security Key</label>
                  <button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.securityClearance()}}>Submit</button>
                </div>
              </div>
            </form>
          </div>  
        }
        {/* {
          quizStarted && 
          <div className="row">
            
            <h1 className="quizListHeader">{quizes[mainCategory].name}</h1>
            <h2 className="quizListHeader">{quizes[mainCategory].subCategories[subCategory].name}</h2>

          </div>  
        } */}
      </div>
    );
  }
}

export default QuizList;
