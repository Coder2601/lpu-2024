// import React, { useState } from 'react'

// const Eligible = () => {

//     const[age, setAge] = useState();

//     const handleInput=(e)=>{
//         setAge(e.target.value);
//     }

//   return (
//     <>
//         <h2>Let's see if you're eligible for the test</h2>
//         <input type="number" placeholder='Enter the age' onChange={handleInput} />

//         {age>=18 ? <h2>You're Eligible</h2> : <h2>You're Under-Age</h2>}
//     </>
//   )
// }

// export default Eligible








// Task : there will be a loggedIn value - it can be true or false.
// There will be three components: Home, Login, Main
// Initially loggedIn value = false and user should land on Login Page
// On Main page, when user clicks login button, change loggedIn = true and change Login button text to Logout, then Home component should be diplayed,else Login Component