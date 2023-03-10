export const GET_ALL_GAMES = "GET_ALL_GAMES" 

export const getAllVideoGames = () => {
    return (dispatch) => 
         fetch(`http://localhost:3001/videogames`) 
        .then((res) => res.json())
        .then((payload)=>{
            dispatch({type:'GET_ALL_GAMES',payload})
        }).catch(error => console.warn(error))
    }