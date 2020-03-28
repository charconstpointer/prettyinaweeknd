import { combineReducers } from 'redux';
import chosenCategoriesReducer from "./chosenCategoriesReducer";

const reducers = combineReducers({
    chosenCategories: chosenCategoriesReducer
});

export { reducers };
