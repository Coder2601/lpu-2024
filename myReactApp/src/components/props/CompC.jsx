import React from 'react'

const CompC = ({bio}) => {
  return (
    <div>
        <h2>CompC</h2>
        <h4>Name: <i>{bio.name}</i></h4>
        <h4>Password: <i>{bio.password}</i></h4>
    </div>
  )
}

export default CompC