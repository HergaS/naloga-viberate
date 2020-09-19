import placeholder from '../images/placeholders/placeholder-200x200.png'

const artistReducer = (state = {
    artists: null,
    artistData: null,
    artistImg: placeholder
}, action) => {
    switch (action.type) {
        case "ARTISTS":
            state = {
                ...state,
                artists: action.payload
            };
            break;
        case "ARTIST_DATA":
            state = {
                ...state,
                artistData: action.payload
            };
            break;
        case "ARTIST_IMG":
            state = {
                ...state,
                artistImg: action.payload
            };
            break;
    }
    return state;
};

export default artistReducer;