import React, { Component } from 'react';
import '../../App.css';

class QuizPage extends Component {

  constructor(props){
    super(props);
    this.state={
      mainCategory : this.props.selected[0],
      subCategory : this.props.selected[1],
      quizCategories : this.props.quizes,
      qNo : 0,
      score : 0,
    }
    
  }

  next(){
    const {onPress} = this.props
    const { quizCategories,mainCategory,subCategory,qNo,score } = this.state;
    const length = quizCategories[mainCategory].subCategories[subCategory].allQuestions.length;
    const  present = this.state.qNo;
    const ans1 = document.getElementById('ans1');
    const ans2 = document.getElementById('ans2');
    const correctAns = quizCategories[mainCategory].subCategories[subCategory].allQuestions[qNo].correctAnswer;
    if (present < length-1){
    ans1.checked ?
    ans1.value === correctAns && this.setState({score : score+10})
    :
    ans2.value === correctAns && this.setState({score : score+10})
    }
    if (present < length-1){
    
    this.setState({qNo : present+1})
    
    }
    else{
      const date = new Date();
      const month = date.getMonth()+1;
      const timing = date.getDate() + "/" + month + "/" + date.getFullYear()
      const name = quizCategories[mainCategory].name + " " + quizCategories[mainCategory].subCategories[subCategory].name;
      localStorage.setItem(name , score);
      localStorage.setItem(name+' date:',timing)
      onPress(mainCategory,subCategory)
    }

  }

  render()
    { 
      const { mainCategory,subCategory,quizCategories,qNo,score } =this.state;
      const ques = quizCategories[mainCategory].subCategories[subCategory].allQuestions[qNo].question;
      const ans1 = quizCategories[mainCategory].subCategories[subCategory].allQuestions[qNo].answer1;
      const ans2 = quizCategories[mainCategory].subCategories[subCategory].allQuestions[qNo].answer2;
      // console.log(quizCategories[mainCategory].subCategories[subCategory].allQuestions)      
    return (
      <div>
        <h1 className="quizListHeader">{quizCategories[mainCategory].name.toUpperCase()}</h1>
        <h2 className="QuizPageSubHeader">{quizCategories[mainCategory].subCategories[subCategory].name.toUpperCase()}</h2>
        <div className="quizBox">
          <h5 className="questionBox">{ques}</h5>
          <div className="answerBox">
            <form action="#">
              <p>
                <label>
                  <input name="group1" type="radio" value={ans1} id="ans1" />
                  <span>{ans1}</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" id="ans2" value={ans2} />
                  <span>{ans2}</span>
                </label>
              </p>
            </form>
          </div>
          <button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.next()}}>Next</button>
        </div>
      </div>
      
    );
  }
}


export default QuizPage;