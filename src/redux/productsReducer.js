const GET_PRODUCTS = "GET_PRODUCTS"
let initialState = {
    products : []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_PRODUCTS : 
            return {
                ...state,
                products : action.payload
            }
        default:
            return state
    }
}

export const getProductsAC = (payload) => ({type : GET_PRODUCTS, payload})
export default productsReducer