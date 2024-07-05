const Play=()=>{

    const handleHover=()=>{
        alert("Hey there! Let's Play");
    }

    const handleInputChange=(event)=>{
        console.log(event.target.value);
    }

    const handleSubmit=()=>{
        // window.location.reload();
        console.log("Data Submitted!");
    }

    return(
        <>
            <h1 onMouseOver={handleHover}>Start the game</h1>
            <br />
            <label>Player Name: </label>
            <input onChange={handleInputChange} type="text" placeholder="Player Name" />
            <br />
            <label>Player Id: </label>
            <input onChange={handleInputChange} type="password" placeholder="Player Id" />
            <br />
            <button onDoubleClick={handleSubmit}>Start Game</button>
        </>
    )
}


export default Play;