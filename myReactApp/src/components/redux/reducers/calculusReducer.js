const initialState = {
    count:0,
    showTables:false,
    showCubes:false,
    showWelcome:true
};

export const calculusReducer = (state = initialState,action)=>{
    switch(action.type){
        case "INCREASE": return {...state,count:state.count+1};
        case "TABLE" : return{...state, showTables:true, showWelcome:false, showCubes:false};
        case "CUBE" : return{...state, showTables:false, showWelcome:false, showCubes:true};
        case "CLEAR" : return {count:0, showTables:false, showWelcome:true, showCubes:false};
        default : return state;
    }
}