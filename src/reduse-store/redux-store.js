import {combineReducers, createStore} from "redux";
import reducerLog from "./reducer";
import basketReducer from "./basket";


let reducer = combineReducers({
    logOutLog: reducerLog,
    basketReducer
})


let store = createStore(reducer);

export default store
