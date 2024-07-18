const initialState = ["Mango", "Litchi","Apple"];

export const fruitReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD" : {
            return [...state,action.payload]
        };
        case "REMOVE": {
            state.splice(action.payload,1);
            return[...state];
        };
        default : return state;
    }
}