let myStyle = {
    fontFamily:"monospace",
    border:"1px solid green",
    backgroundColor:"cyan",
    textAlign:"center"
}

function Heading(){
    return (<>
    <h1 style={myStyle}>Heading</h1>    {/* Internal Styling */}

    <p id="" className="" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sit beatae eaque.</p>
    <h2 style={myStyle}>Sub-Heading</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    </>)  
}

function Game(){
    return <button style={{backgroundColor:"red", fontSize:"25px", fontFamily:"cursive"}}>Play</button>   //Inline Styling
}

export {Game, Heading};  // Named Export


export default Heading;  //Default Export