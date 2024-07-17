import React from 'react'
import CompC from './CompC'

const CompB = ({handleChange, bio, setBio}) => {
  return (
    <div>
        <h2>CompB</h2>
        <input type="text" id="name" onChange={handleChange} />
        <br /><hr />
        <CompC bio={bio} />
    </div>
  )
}

export default CompB