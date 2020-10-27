import React from 'react'
import "./Footer.css"
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
               <img className="footer__albumLogo" src="https://miro.medium.com/max/3574/0*ZZSXxJCsy9EOouhS.jpg" alt=""/>

               <div className="footer__songInfo">
                   <h4>Yeah.</h4>
                   <p>Usher..</p>
               </div>
           </div>

           <div className="footer__center">
           <ShuffleIcon className="footer__green"/>
           <SkipPreviousIcon className="footer__icon" />
           <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
           <SkipNextIcon className="footer__icon"/>
           <RepeatIcon className="footer__green" />
           </div>

           <div className="footer__right">

          <Grid container spacing={2}>

              <Grid item>
              <PlaylistPlayIcon/>
              </Grid>

              <Grid item>
              <VolumeDownIcon/>
              </Grid>

              <Grid item xs>
                <Slider/>
          </Grid>
          </Grid>
           </div>
        </div>
    )
}

export default Footer
