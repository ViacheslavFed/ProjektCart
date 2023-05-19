import { cartReducer } from "./cartReducer";

import {combineReducers,createStore} from "redux"

const rootReducer = combineReducers({cart:cartReducer}) 

export const store = createStore(rootReducer)