//store redux
import {combineReducers} from "redux"

//import reducer

//import auth.reducer
import authReducer from "./auth";
import sessionReducer from "./sessionReducer";
//import message.reducer
import messageReducer from "./message";

export default combineReducers({
    authReducer,
    messageReducer,
    session: sessionReducer
})