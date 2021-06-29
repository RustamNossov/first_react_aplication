import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             age: 26,
//             nationality: 'rus'
//         }
//        // this.nextYear = this.nextYear.bind(this);
//     }

//     nextYear = () => {
//         this.setState(state => ({
//                    age: ++state.age
//                }))
//     }
//     // nextYear() {
//     //    console.log(1)
//     //    this.setState(state => ({
//     //        age: ++state.age
//     //    }))
//     // }
    
//     render() {
//         const {name, surname, link} = this.props;
//         const {age} = this.state,
//               {nationality} = this.state;
//             return (
//                         <>
//                             <button onClick={this.nextYear}>++</button>
//                             <h1>My name is {name}, surname - {surname}, age - {age}, nation - {nationality}</h1>
//                             <a href={link}>My profile</a>
//                         </>
//             )
//         }
// }


// // передача параметров в функцию
// //
// // function WhoAmI({name, surname, link}) {
// //     return (
// //         <>
// //             <h1>My name is {name}, surname - {surname}</h1>
// //             <a href={link}>My profile</a>
// //         </>
// //     )
// // }

// const All = () => {
//     return (
//         <>
//                 <WhoAmI name = "Jhon" surname="Smith" link="facebook.com"/>
//                 <WhoAmI name = "Alex" surname="Smith" link="facebook.com"/>
//                 <WhoAmI name = "Susan" surname="Smith" link="facebook.com"/>
//         </>
//     )
// }

ReactDOM.render(<App/>,document.getElementById('root'));

//ReactDOM.render(<App/>,document.getElementById('root'));
