import { userLoginReducer } from "./reducers/userLoginReducer";
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from "./reducers/combineReducer";
import { composeWithDevTools } from 'redux-devtools-extension';




  
export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
