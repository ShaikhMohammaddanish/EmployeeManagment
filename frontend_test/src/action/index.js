import { LoginStart , LoginFail, LoginDone, Logout} from "../action/types"
import axios from 'axios'



const API = axios.create({


})

export function login(data) {
    return async (dispatch)=>{

        const response = await client.post('/fakeApi/todos', { todo: initialTodo })
        dispatch({ type: 'todos/todoAdded', payload: response.todo })
    }
    

    
  }