import React, { Fragment } from 'react'
import styled from 'styled-components'

const StudentCard = styled.div`
  padding: 10px;
  width: 200px;
  margin: 10px;
  border: 1px solid black;
  .name {
    font-size: 1.5empx;
    font-weight: bold;
  }
`

class Student extends React.Component {

  render() {
    return (
      <StudentCard>
        <div className="name">
          { this.props.firstName } { this.props.lastName }
        </div>
        { this.props.children && (
          <div className="courses">
            { this.props.children }
          </div>
        )}
      </StudentCard>
    )
  }
}

class Students extends React.Component {

  render() {
    return (
      <Fragment>
        <Student firstName="Fulano" lastName="López"></Student>
        <Student firstName="Mengano" lastName="Pérez"></Student>
        <Student firstName="Zutano" lastName="Hernández">
          <div>
            <div>Cursos:</div>
            <ul>
              <li>Frontend con React</li>
              <li>Backend con Express</li>
              <li>Bases de datos con Mongo</li>
            </ul>
          </div>
        </Student>
      </Fragment>
    )
  }
}

export default Students