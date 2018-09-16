import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';
import Container from './Container/Container';
import Login from './Screens/Login/Login';
import SignUp from './Screens/Sign_Up/Sign_Up';
import QuizList from './Screens/Quiz List/Quiz List';
import QuizPage from './Screens/Quiz Page/Quiz Page';
import ShowResult from './Screens/Show Result/Show Result';


class App extends Component {

  constructor(props){
    super(props);
    this.state={

      loginPage : true,
      signUpPage : false,
      quizList : false,
      quizPage: false,
      currentUser : {},
      showResult : false,
      quizCategories : [
        {
          name : "HTML",
          subCategories : [
            {name : "quiz 1",
             weightage : "30 Marks",
             allQuestions : [
              {
                question : "HTML Stands For ?",
                answer1  : "Hyper Text Mark Up Language",
                answer2  : "Hydro Technical Mark Up Language",
                correctAnswer  : "Hyper Text Mark Up Language",
              },
              {
                question : "HTML Is Used For  ?",
                answer1  : "Designing The Page",
                answer2  : "Structuring The Page",
                correctAnswer  : "Structuring The Page",
              },
              {
                question : "In HTML Input Is An Example Of ?",
                answer1  : "Self Closing Tag",
                answer2  : "Normal Tag",
                correctAnswer  : "Self Closing Tag",
              },
              {
                question : "In HTML You Can Use JS In Tag?",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              },
              {
                question : "In HTML You Can Use JS In Which Tag ?",
                answer1  : "<script></script>",
                answer2  : "<javascript></javascript>>",
                correctAnswer  : "<script></script>",
              }
            ],
            },
            {name : "quiz 2",
            weightage : "60 Marks",
             allQuestions : [
              {
                question : "HTML Stands For ?",
                answer1  : "Hyper Text Mark Up Language",
                answer2  : "Hydro Technical Mark Up Language",
                correctAnswer  : "Hyper Text Mark Up Language",
              },
              {
                question : "HTML Is Used For  ?",
                answer1  : "Designing The Page",
                answer2  : "Structuring The Page",
                correctAnswer  : "Structuring The Page",
              },
              {
                question : "In HTML Input Is An Example Of ?",
                answer1  : "Self Closing Tag",
                answer2  : "Normal Tag",
                correctAnswer  : "Self Closing Tag",
              },
              {
                question : "In HTML You Can Use JS In Tag?",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              },
              {
                question : "In HTML You Can Use JS In Which Tag ?",
                answer1  : "<script></script>",
                answer2  : "<javascript></javascript>>",
                correctAnswer  : "<script></script>",
              }
            ],
            },
            {name : "quiz 3",
            weightage : "90 Marks",
             allQuestions : [
              {
                question : "HTML Stands For ?",
                answer1  : "Hyper Text Mark Up Language",
                answer2  : "Hydro Technical Mark Up Language",
                correctAnswer  : "Hyper Text Mark Up Language",
              },
              {
                question : "HTML Is Used For  ?",
                answer1  : "Designing The Page",
                answer2  : "Structuring The Page",
                correctAnswer  : "Structuring The Page",
              },
              {
                question : "In HTML Input Is An Example Of ?",
                answer1  : "Self Closing Tag",
                answer2  : "Normal Tag",
                correctAnswer  : "Self Closing Tag",
              },
              {
                question : "In HTML You Can Use JS In Tag?",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              },
              {
                question : "In HTML You Can Use JS In Which Tag ?",
                answer1  : "<script></script>",
                answer2  : "<javascript></javascript>>",
                correctAnswer  : "<script></script>",
              }
            ],
            }
          ]
        },
        {
          name : "CSS",
          subCategories : [
            {name : "quiz 1",
            weightage : "30 Marks",
             allQuestions : [
              {
                question : "CSS Stands For?",
                answer1  : "Cascading Style Sheet",
                answer2  : "Central Superior Services",
                correctAnswer  : "Cascading Style Sheet",
              },
              {
                question : "CSS Used For?",
                answer1  : "The Structurer Of Site",
                answer2  : "Designing The Site",
                correctAnswer  : "Designing The Site",
              },
              {
                question : "CSS Can be Impleneted Inline?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "true",
              },
              {
                question : "External CSS Can Be Imported From?",
                answer1  : "<link> Tag",
                answer2  : "<hreff> Tag",
                correctAnswer  : "<link> Tag",
              },
              {
                question : "Bootstrap Is ____ Of Css?",
                answer1  : "Framework",
                answer2  : "Library",
                correctAnswer  : "Library",
              }
            ],
            },
            {name : "quiz 2",
            weightage : "60 Marks",
             allQuestions : [
              {
                question : "CSS Stands For?",
                answer1  : "Cascading Style Sheet",
                answer2  : "Central Superior Services",
                correctAnswer  : "Cascading Style Sheet",
              },
              {
                question : "CSS Used For?",
                answer1  : "The Structurer Of Site",
                answer2  : "Designing The Site",
                correctAnswer  : "Designing The Site",
              },
              {
                question : "CSS Can be Impleneted Inline?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "true",
              },
              {
                question : "External CSS Can Be Imported From?",
                answer1  : "<link> Tag",
                answer2  : "<hreff> Tag",
                correctAnswer  : "<link> Tag",
              },
              {
                question : "Bootstrap Is ____ Of Css?",
                answer1  : "Framework",
                answer2  : "Library",
                correctAnswer  : "Library",
              }
            ],
            },
            {name : "quiz 3",
            weightage : "90 Marks",
             allQuestions : [
              {
                question : "CSS Stands For?",
                answer1  : "Cascading Style Sheet",
                answer2  : "Central Superior Services",
                correctAnswer  : "Cascading Style Sheet",
              },
              {
                question : "CSS Used For?",
                answer1  : "The Structurer Of Site",
                answer2  : "Designing The Site",
                correctAnswer  : "Designing The Site",
              },
              {
                question : "CSS Can be Impleneted Inline?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "true",
              },
              {
                question : "External CSS Can Be Imported From?",
                answer1  : "<link> Tag",
                answer2  : "<hreff> Tag",
                correctAnswer  : "<link> Tag",
              },
              {
                question : "Bootstrap Is ____ Of Css?",
                answer1  : "Framework",
                answer2  : "Library",
                correctAnswer  : "Library",
              }
            ],
            }
          ]
        },
        {
          name : "Javascript",
          subCategories : [
            {name : "quiz 1",
            weightage : "30 Marks",
             allQuestions : [
              {
                question : "Javascipt Is Markup Language ?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "false",
              },
              {
                question : "Update Version Of JS Is ?",
                answer1  : "ES6",
                answer2  : "ES5",
                correctAnswer  : "ES5",
              },
              {
                question : "How To Declare Variable In Js  ?",
                answer1  : "var a = 'name' ",
                answer2  : "var a ;",
                correctAnswer  : "var a ;",
              },
              {
                question : "How To Call Function In Js  ?",
                answer1  : "myFUnction();",
                answer2  : "call.myFunction",
                correctAnswer  : "myFUnction();",
              },
              {
                question : "How To Comment Line In Js  ?",
                answer1  : "<!--><-->",
                answer2  : "\\",
                correctAnswer  : "\\"
              }
            ],
            },
            {name : "quiz 2",
            weightage : "60 Marks",
             allQuestions : [
              {
                question : "Javascipt Is Markup Language ?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "false",
              },
              {
                question : "Update Version Of JS Is ?",
                answer1  : "ES6",
                answer2  : "ES5",
                correctAnswer  : "ES5",
              },
              {
                question : "How To Declare Variable In Js  ?",
                answer1  : "var a = 'name' ",
                answer2  : "var a ;",
                correctAnswer  : "var a ;",
              },
              {
                question : "How To Call Function In Js  ?",
                answer1  : "myFUnction();",
                answer2  : "call.myFunction",
                correctAnswer  : "myFUnction();",
              },
              {
                question : "How To Comment Line In Js  ?",
                answer1  : "<!--><-->",
                answer2  : "\\",
                correctAnswer  : "\\"
              }
            ],
            },
            {name : "quiz 3",
            weightage : "90 Marks",
             allQuestions : [
              {
                question : "Javascipt Is Markup Language ?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "false",
              },
              {
                question : "Update Version Of JS Is ?",
                answer1  : "ES6",
                answer2  : "ES5",
                correctAnswer  : "ES5",
              },
              {
                question : "How To Declare Variable In Js  ?",
                answer1  : "var a = 'name' ",
                answer2  : "var a ;",
                correctAnswer  : "var a ;",
              },
              {
                question : "How To Call Function In Js  ?",
                answer1  : "myFUnction();",
                answer2  : "call.myFunction",
                correctAnswer  : "myFUnction();",
              },
              {
                question : "How To Comment Line In Js  ?",
                answer1  : "<!--><-->",
                answer2  : "\\",
                correctAnswer  : "\\"
              }
            ],
            }
          ]
        },
        {
          name : "Bootstrap",
          subCategories : [
            {name : "quiz 1",
            weightage : "30 Marks",
             allQuestions : [
              {
                question : "How Can We Import Bootstrap?",
                answer1  : "through CDN",
                answer2  : "through cmd promt",
                correctAnswer  : "through CDN",
              },
              {
                question : "Using Bootstrap We Can Make Our Web Responsive?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "true",
              },
              {
                question : "By Adding Only A Class Name The Element Changes It's?",
                answer1  : "Behaviour/Design",
                answer2  : "Structure",
                correctAnswer  : "Behaviour/Design",
              },
              {
                question : "Latest Version Of Bootstrap Is?",
                answer1  : "3.3",
                answer2  : "4.0",
                correctAnswer  : "4.0",
              },
              {
                question : "Bootstrap Is Product Of?",
                answer1  : "Twitter",
                answer2  : "Facebook",
                correctAnswer  : "Twitter",
              }
            ],
            },
            {name : "quiz 2",
            weightage : "60 Marks",
             allQuestions : [
              {
                question : "How Can We Import Bootstrap?",
                answer1  : "through CDN",
                answer2  : "through cmd promt",
                correctAnswer  : "through CDN",
              },
              {
                question : "Using Bootstrap We Can Make Our Web Responsive?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "true",
              },
              {
                question : "By Adding Only A Class Name The Element Changes It's?",
                answer1  : "Behaviour/Design",
                answer2  : "Structure",
                correctAnswer  : "Behaviour/Design",
              },
              {
                question : "Latest Version Of Bootstrap Is?",
                answer1  : "3.3",
                answer2  : "4.0",
                correctAnswer  : "4.0",
              },
              {
                question : "Bootstrap Is Product Of?",
                answer1  : "Twitter",
                answer2  : "Facebook",
                correctAnswer  : "Twitter",
              }
            ],
            },
            {name : "quiz 3",
            weightage : "90 Marks",
             allQuestions : [
              {
                question : "How Can We Import Bootstrap?",
                answer1  : "through CDN",
                answer2  : "through cmd promt",
                correctAnswer  : "through CDN",
              },
              {
                question : "Using Bootstrap We Can Make Our Web Responsive?",
                answer1  : "true",
                answer2  : "false",
                correctAnswer  : "true",
              },
              {
                question : "By Adding Only A Class Name The Element Changes It's?",
                answer1  : "Behaviour/Design",
                answer2  : "Structure",
                correctAnswer  : "Behaviour/Design",
              },
              {
                question : "Latest Version Of Bootstrap Is?",
                answer1  : "3.3",
                answer2  : "4.0",
                correctAnswer  : "4.0",
              },
              {
                question : "Bootstrap Is Product Of?",
                answer1  : "Twitter",
                answer2  : "Facebook",
                correctAnswer  : "Twitter",
              }
            ],
            }
          ]
        },
        {
          name : "React Js",
          subCategories : [
            {name : "quiz 1",
            weightage : "30 Marks",
             allQuestions : [
              {
                question : "React Is ?",
                answer1  : "Framework",
                answer2  : "Library",
                correctAnswer  : "Library",
              },
              {
                question : "In React The Render Function Runs Whenever State Is Changed",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              },
              {
                question : "In React You Can Update State By This Method ?",
                answer1  : "UpdateState()",
                answer2  : "setState()",
                correctAnswer  : "setState",
              },
              {
                question : "In React There Are ___ Types Of Functions?",
                answer1  : "5",
                answer2  : "2",
                correctAnswer  : "2",
              },
              {
                question : "In React There Is One Way Binding?",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              }
            ],
            },
            {name : "quiz 2",
            weightage : "60 Marks",
             allQuestions : [
              {
                question : "React Is ?",
                answer1  : "Framework",
                answer2  : "Library",
                correctAnswer  : "Library",
              },
              {
                question : "In React The Render Function Runs Whenever State Is Changed",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              },
              {
                question : "In React You Can Update State By This Method ?",
                answer1  : "UpdateState()",
                answer2  : "setState()",
                correctAnswer  : "setState",
              },
              {
                question : "In React There Are ___ Types Of Functions?",
                answer1  : "5",
                answer2  : "2",
                correctAnswer  : "2",
              },
              {
                question : "In React There Is One Way Binding?",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              }
            ],},
            {name : "quiz 3",
            weightage : "90 Marks",
             allQuestions : [
              {
                question : "React Is ?",
                answer1  : "Framework",
                answer2  : "Library",
                correctAnswer  : "Library",
              },
              {
                question : "In React The Render Function Runs Whenever State Is Changed",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              },
              {
                question : "In React You Can Update State By This Method ?",
                answer1  : "UpdateState()",
                answer2  : "setState()",
                correctAnswer  : "setState",
              },
              {
                question : "In React There Are ___ Types Of Functions?",
                answer1  : "5",
                answer2  : "2",
                correctAnswer  : "2",
              },
              {
                question : "In React There Is One Way Binding?",
                answer1  : "false",
                answer2  : "true",
                correctAnswer  : "true",
              }
            ],
            }
          ]
        }
      ],
    }
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.showQuiz = this.showQuiz.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  //Event Handlers

  componentDidMount(){
    const user = localStorage.getItem('email');
    user && this.setState({loginPage : false,quizList:true})
  }

  // home(){
  //   this.setState({loginPage : false,quizList:true})
  // }

  logOut(){
    localStorage.clear();
    this.setState({loginPage : true,quizList:false,showResult:false})
  }

  login(email,password){
    
    const validEmail = localStorage.getItem("email");
    const validPassword = localStorage.getItem("password");

    email === validEmail && password === validPassword ? this.setState({loginPage : false,quizList:true}) : swal("Access Denied", "Looks Like You Entered Wrong Email Or Password");

  }

  dontHaveAccount(){
    
    this.setState({signUpPage : true})
    this.setState({loginPage : false})
  }

  signUp(firstName,lastName,password,email){
    this.setState({signUpPage : false})
    this.setState({loginPage : true})
    localStorage.setItem('firstName',firstName);
    localStorage.setItem('lastName',lastName);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    const {currentUser} = this.state;
    currentUser.firstName = localStorage.getItem('firstName');
    currentUser.lastName = localStorage.getItem('lastName');
    currentUser.email = localStorage.getItem('email');
    currentUser.password = localStorage.getItem('password');
    
    this.setState(currentUser)

  }

  showQuiz(mainTopic,subTopic){
    
    this.setState({quizPage : true, mainCategory : mainTopic, subcategory : subTopic})
  }

  showResult(mainCategory,subcategory){
    this.setState({showResult : true, quizPage : false,mainCategory:mainCategory,subcategory:subcategory})
  }
  
  render() {

    const { loginPage,signUpPage,quizCategories,quizPage,mainCategory,subcategory,showResult } = this.state;

    return (
      <Container>
        {loginPage && <Login signUpKar={()=>{this.dontHaveAccount()}} onPress={this.login}/>}
        {signUpPage && !loginPage && <SignUp onPress={this.signUp}/>}
        {!loginPage && !signUpPage && !quizPage && !showResult && <QuizList alreadyGiven={this.showResult} onPress={this.showQuiz} quizes={quizCategories}/>}
        {!loginPage && !signUpPage && quizPage && !showResult && <QuizPage onPress={this.showResult} selected={[mainCategory,subcategory]} quizes={quizCategories}/>}
        {!loginPage && !signUpPage && !quizPage && showResult && <ShowResult selected={[mainCategory,subcategory]} quizes={quizCategories}/>}
        <div className="logOut">{!loginPage && !signUpPage && <button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.logOut()}}>Log Out</button>}</div>
        {/* <div className="logOut">{!loginPage && !signUpPage && <button className="btn waves-effect waves-light" type="button" name="action" onClick={()=>{this.home()}}>Home</button>}</div> */}
      </Container>
    );
  }
}

export default App;