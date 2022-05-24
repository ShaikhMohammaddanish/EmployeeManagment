
import { LoginStart , LoginFail, LoginDone, Logout} from "../action/types"

const initialState = {'loading':false, data:{}, error:''}

const authReducer =( state=initialState, action)=>{
    switch (action.type){

        case LoginStart:
            return {...state,'loading':true}

        case LoginFail:
            return {...state,'loading':false, error:action.payload.error}

        case LoginDone:
            console.log('in reducer login done',action.payload)
            return {...state,'loading':false, data:action.payload}
        
        case Logout:
            return {...state,'loading':false, data:{}, error:''}
        
        default:
        return state
            
    }
    


}

export default  authReducer