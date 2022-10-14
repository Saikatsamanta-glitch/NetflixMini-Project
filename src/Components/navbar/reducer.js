const initial={
    val:""
}

const nav_reducer = ( state=initial,action )=>{
    switch (action.type) {
        case "search":
            return {...state, val:action.payload};
    
        default:
            return state;
    }
}   

export default nav_reducer;