
import { LoginStart , LoginFail, LoginDone, Logout} from "../action/types"

const initialState = {'loading':false, data:{}, error:''}

const authReducer =( state=initialState, action)=>{
    switch (action.type){

        case LoginStart:
            return {...state,'loading':true}

        case LoginFail:
            return {...state,'loading':false, error:action.pyload.error}

        case LoginDone:
            return {...state,'loading':false, data:action.pyload.data}
        
        case Logout:
            return {...state,'loading':false, data:{}, error:''}
        
        default:
        return state
            
    }
    


}

export default  authReducer