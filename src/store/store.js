import React from "react";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import errorsReducer from "../reducers/errorsReducer";
import photosReducer from "../reducers/photosReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		photos: photosReducer,
		errors: errorsReducer,
	}),
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
	console.log(store.getState());
});
export default store;
