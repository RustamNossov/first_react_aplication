import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import reportWebVitals from './reportWebVitals';

// const elem = (
//   <div>
//     <h2>Hello world!</h2>
//     <input type="text" placeholder = "Type here..." />
//     <button/>
//   </div>

// )

const Header = () => {
  const scr = 'Hello world';
  return <h2>{scr}</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styledField = {
            width: '300px'
          }
  return <input 
    style = {styledField}
    type="text" 
    placeholder = {holder} 
    autoComplete = ""
    className="first"
    htmlFor=""/>
}

const Button = () => {
  const text = "log in";
  const res = () => {
    return 'Log in, please'
  }
  const p = <p>Log in</p>
  const logged = false;
  // return <button>{res()}</button>
  //return <button>{p}</button>
  return <button>{logged ? null : text}</button>
}

const App = () => {
  return (
    <div> 
      <Header/>
      <Field/>
      <Button/>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
