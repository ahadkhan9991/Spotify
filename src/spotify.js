//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start///#endregion

export const authEndpoint =
    "https://accounts.spotify.com/authorize";

//click login button

const redirectUri = "http://localhost:3000/";
//rediect to spotify login page

//redirect to home page once logged in

const clientId = "886838ecab39450191a1d29029eee945";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
//scopes or services which is provided to a user
//actions that can be performed by the user

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            //#accessToken=mysupersecretkey&name=priya
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
    //get the token access
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//response_type=token will authenticate the user , who are you and provide the identity