
import { FeachOne, FeachAll, Edit, Delete, Create,documentLoading} from "../action/types";

const initialState = {'loading':false, data:{}, error:''}

const document =( state=initialState, action)=>{
    switch (action.type){

        case documentLoading:
            return {...state,'loading':true}

        case FeachOne:
            return {...state,'loading':false, data:action.payload}

        case FeachAll:
            return {...state,'loading':false, data:action.payload}
        
        case Edit:
            return {...state,'loading':false, data:action.payload}
            
        case Delete:
            return {...state,'loading':false, data:action.payload}
            
        case Create:
            return {...state,'loading':false, data:action.payload}
    
            
        
                    
        default:
        return state
            
    }
    


}

export default  document