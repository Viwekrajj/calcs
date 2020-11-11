import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import denOfProjectsReducer from "../reducers/denOfProjectsReducer";

const rootReducer = combineReducers({
  denOfProjectsReducerState: denOfProjectsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
