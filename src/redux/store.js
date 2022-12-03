import { combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import sneakersReducer from "./snakersReducer";

const reducers = combineReducers({
    productsPage : productsReducer,
    sneakersPage : sneakersReducer
})

const store = createStore(reducers)
window.store = store
export default store