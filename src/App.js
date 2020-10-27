import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';
import {useDataLayerValue} from "./DataLayer"

const spotify= new SpotifyWebApi();

function App() {

  const[{token},dispatch]= useDataLayerValue();

    useEffect(()=>{
      const hash= getTokenFromUrl();
      window.location.hash='';

      //access_token has been observed in the console.log
      const _token= hash.access_token;

      if(_token){
        dispatch({
           type: "SET_TOKEN",
           token:_token,
        })
        
        spotify.setAccessToken(_token);
        spotify.getMe().then((user)=>{
          dispatch({
            type:'SET_USER',
            user: user
          })
        })

        
        spotify.getUserPlaylists()
        .then((playlists)=>{
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          })
        })

        spotify.getPlaylist('e9222eee5e5340169f41b2375ffc284c')
        .then((response)=>{
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          })
        })
      }
      // console.log('I have a token', token);
    },[]);

    // console.log("person is", user);
    // console.log("token is", token);

    return (
    <div className="app">
      {/* js code in return */}
      {
        token?<Player spotify={spotify}/>
        :
          <Login/>
      }
    </div>
  );
}

export default App;
