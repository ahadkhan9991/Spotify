// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"; //wrapper which provides the spotify services
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";


const spotify = new SpotifyWebApi();
//help to interact between reactapp and spotify

function App() {
    //const [token ,setToken] = useState(null); 
    // eslint-disable-next-line no-unused-vars
    const [{ user, token }, dispatch] = useDataLayerValue(); //dispatch --> update the values in datalayer

    //short term memory store


    // run code based on a given condition

    useEffect(() => {

        const hash = getTokenFromUrl();
        //grab the token from the url when app components loads for the first time

        window.location.hash = ""; //hide the url from token
        const _token = hash.access_token;

        if (_token) {

            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })



            spotify.setAccessToken(_token); //given the access token to spotify api

            spotify.getMe().then(user => {

                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({

                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                })
            })
        }

        console.log("I HAVE A TOKEN :", token);


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //[] --> run it once

    return ( <
        div className = "app" >

        {
            token ? (
                // eslint-disable-next-line react/jsx-no-undef
                <
                Player spotify = { spotify }
                />
            ) : ( <
                Login / >
            )
        }

        { /* Spotify Logo */ } { /* Login with spotify button */ }


        <
        /div>
    );
}

export default App;

//Problem : Prop drilling  --> tightly coupled code(if we make any changes in one area of the code then other areas will get reflected)
//solution : use of redux or react context api(user friendly)