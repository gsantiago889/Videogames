import { GET_ALL_GAMES } from "./actions"

const initialState={
    videogames:[]
}

function rootReducers(state=initialState, action){
    switch (action.type){
        case GET_ALL_GAMES:
            return{ 
                ...state,
                videogames: action.payload
            }
        
            default:
                return state
    }
}

export default rootReducers

