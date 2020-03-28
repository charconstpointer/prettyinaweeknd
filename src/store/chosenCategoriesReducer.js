function chosenCategoriesReducer(state = [], action) {
    switch (action.type) {
        case "ADD_CATEGORY":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default chosenCategoriesReducer;