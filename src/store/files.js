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
        else if(action.type==="FILES_DEL")
        {   console.log("old state", state) 
            console.log("action", action);   
            var newstate=state.filter(ele=>{if(ele.id!==action.data){return true}else{return false}})
            console.log(" new state ",newstate);
            return newstate
        }
        else{
            return state
        }
}


export default fileReducer;