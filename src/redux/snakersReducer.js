const GET_SNEAKERS = "GET_SNEAKERS"

let initialState = {
    sneakers : []
}
const sneakersReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_SNEAKERS : 
            return {
                ...state,
                sneakers : [action.payload]
            }
        default : 
        return state
    }
}

export const getSneakersAC = (sneakers) => ({type : GET_SNEAKERS, payload : sneakers})
export default sneakersReducer