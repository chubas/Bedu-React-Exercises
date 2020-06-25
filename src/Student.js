import React from "react";

class Student extends React.Component {

    constructor (props) {
        super();
        this.state = [
            'Backend con GraphQL',
            'Frontend con React'
        ]
    }

    render () {
        return (<div>
            <h2>{ this.props.name }</h2>
            <h3>{ this.props.lastName }</h3>
            <ul>
                {this.state.map((course) => {
                    return <li>{ course }</li>
                })}
            </ul>
        </div>)
    }
}


// const Student = (props) => {
//     return (<div>
//         <h2>{ props.name }</h2>
//         <h3>{ props.lastName }</h3>
//         <ul>
//             <li>Backend con GraphQL</li>
//             <li>Frontend con React</li>
//         </ul>
//     </div>)
// }

export default Student;