export function addArtists(artists) {
    return {
        type: "ARTISTS",
        payload: artists
    }
}

export function addArtistData(data) {
    return {
        type: "ARTIST_DATA",
        payload: data
    }
}

export function addArtistImg(img) {
    return {
        type: "ARTIST_IMG",
        payload: img
    }
}