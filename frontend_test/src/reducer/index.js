import { combineReducers } from "redux";
import document from "./document";
import authReducer from "./authReducer";
const RootReducer = combineReducers({
    auth:authReducer,
    document:document

})

export default RootReducer;
