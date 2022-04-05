
   
export const FavoritesReducer = (state = [], action) => {

    const { type, payload } = action;

    if (type === 'ADD_FAVORITE') {

        state = [...state, payload];
        return state;
    }
    else if( type === 'REMOVE_FAVORITE'){
        let newState = state.filter(q => q.id != payload.id);
        return newState;
    }
    else if(type === 'GET_ALL_FAVORITES'){
        return state;
    }
    else{
        return state;
    }
}
