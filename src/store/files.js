const fileReducer=(state=[],action)=>
{

        if(action.type==="FILES_INIT")
        {
        console.log("action",action);
        return action.data
        }
        else if(action.type==="FILES_ADD")
        {
            return state.concat(action.data);
        }
        else{
            return state
        }
}


export default fileReducer;