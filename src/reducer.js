export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    //remove after finished developing......
    //token:"BQAdMr9-NR2RNa6fvzodPsV9BPkhDwrglQ1CGP-xFI5B6aWJ1kSbPDESBVE5qq5L85CZhfs6Xzvf3RiUKvYT4qxeEl2isErS_Oc6tLkzmBTXiIvRDemEPi4QG3FQkekDzbdzj816wHADZVHtQC1vKiWnucxz0EVafiIwC6XXYXIUFiI0",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        //Action -> type , [payload]

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        default:
            return state;

    }
}

export default reducer;