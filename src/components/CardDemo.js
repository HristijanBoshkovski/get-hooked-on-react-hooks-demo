import React, {useState, useEffect, useContext} from 'react';
import AgeContext from '../context/ageContext';
import useName from '../hooks/useName';
import './Card.css';

export default function ClassCard() {

    const [firstName, lastName, setFirstName, setLastName] = useName('Jane', 'Doe');

    const ageContext = useContext(AgeContext);

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

        return (
            <div className='Card'>
                <label className='Label'>First Name:</label>
                <input
                    className='Input'
                    placeholder='Enter your first name:'
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <hr />
                <label className='Label'>Last Name:</label>
                <input
                    className='Input'
                    placeholder='Enter your last name:'
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <hr />
                <label className='Label'>Age:</label>
                <label className='Label'>{ageContext.age}</label>
            </div>
        );
}

// import React, {Component} from 'react';
// import AgeContext from '../context/ageContext';
// import './Card.css';

// class ClassCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//         }
//         this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
//         this.handleLastNameChange = this.handleLastNameChange.bind(this);
//     }

//     componentDidMount() {
//         this.setState({
//             firstName: 'John',
//             lastName: 'Doe',
//         })
//     }

//     componentWillUnmount() {
//         this.setState({
//             firstName: '',
//             lastName: '',
//         })
//     }

//     handleFirstNameChange(e) {
//         this.setState({
//             firstName: e.target.value,
//         })
//     }

//     handleLastNameChange(e) {
//         this.setState({
//             lastName: e.target.value,
//         })
//     }

//     render() {            
//         return (
//             <AgeContext.Consumer>
//                 {context => (
//                     <div className='Card'>
//                     <label className='Label'>First Name:</label>
//                     <input
//                         className='Input'
//                         placeholder='Enter your first name:'
//                         value={this.state.firstName}
//                         onChange={this.handleFirstNameChange}
//                     />
//                     <hr />
//                     <label className='Label'>Last Name:</label>
//                     <input
//                         className='Input'
//                         placeholder='Enter your last name:'
//                         value={this.state.lastName}
//                         onChange={this.handleLastNameChange}
//                     />
//                     <hr />
//                     <label className='Label'>Age:</label>
//                     <label className='Label'>{context.age}</label>
//                 </div>
//                 )}
//             </AgeContext.Consumer>
//         );
//     }
// }

// export default ClassCard;