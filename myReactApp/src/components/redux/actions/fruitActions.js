export const addfruits = (fruit)=>{
    return{
        type : "ADD",
        payload: fruit
    }
}

export const deleteFruit = (id)=>{
    return{
        type: "REMOVE",
        payload:id
    }
}