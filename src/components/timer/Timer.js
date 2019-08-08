import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Timer.css';

const Timer = (props) => {
	const timerLabel = props.sessionOn ? 'Session' : 'Break';
	return (
		<div className="timer-main-container">
		  <div className="timer-sub-container">
		   <p id="timer-label">{timerLabel}</p>
		   <div id="time-left">
		       <span id='minutes'>{props.sessionLength < 10 ? '0'+props.sessionLength  : props.sessionLength}</span>
		        <span>:</span> 
		       <span id='secondes'>{props.secs < 10 ? '0'+props.secs : props.secs}</span>
		    </div>
		  </div>
		  <div className="timer-elements-container">
		     <div id="start-stop" className="icon" onClick={props.onPlayStopClick}><FontAwesomeIcon icon="play"/></div>
		     <div id="reset" className="icon" onClick={props.onResetTimerClick}><FontAwesomeIcon icon="sync-alt"/></div>	     
		  </div>
		</div>
	);
}

export default Timer;