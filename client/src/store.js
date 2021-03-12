import { createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./redux/reducers";

const middleware = [thunkMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
// export default function configureStore(preloadedState = {}) {
//     const middlewares = [thunkMiddleware]; // loggerMiddleware
//     const middlewareEnhancer = composeWithDevTools(
//       applyMiddleware(...middlewares)
//     );
  
//     const enhancers = [middlewareEnhancer];
//     const composedEnhancers = compose(...enhancers);
  
//     const store = createStore(rootReducer, preloadedState, composedEnhancers);
  
//     return store;
//   }
  