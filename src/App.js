import React from 'react';
import MainTitle from './components/mainTitle/MainTitle';
import Length from './components/length/Length';
import Timer from './components/timer/Timer';
import './App.css';


class App extends React.Component {
	
	state = {
		breakLength : 5,
		sessionLength : 25,
		minutes : 25,
		secondes : 0,		
		playStop : false,
		sessionOn : true,
		breakOn : false
	}

    incrementBreakClickHandler = () => {
			if(this.state.breakLength < 60 && !this.state.playStop){
				this.setState((prevState) => ({breakLength:prevState.breakLength+1}));
			}		
	}
	
	incrementSessionClickHandler = () => {
			if(this.state.sessionLength < 60 && !this.state.playStop){
				this.setState((prevState) => ({sessionLength:prevState.sessionLength+1,
											   minutes:prevState.minutes+1}));
			}		
	}
	
	decrementBreakClickHandler = () => {
			if(this.state.breakLength > 1 && !this.state.playStop){
				this.setState((prevState) => ({breakLength:prevState.breakLength-1}));
			}		
	}
	
	decrementSessionClickHandler = () => {
			if(this.state.sessionLength > 1 && !this.state.playStop){
				this.setState((prevState) => ({sessionLength:prevState.sessionLength-1,
											  minutes:prevState.minutes-1}));
			}		
	}
	
	resetTimerClickHandler = () => {
		clearInterval(this.timerId);
		this.setState({
			breakLength : 5,
			sessionLength : 25,
			minutes:25,
			secondes:0,
			playStop : false,
			sessionOn : true,
		    breakOn : false
					  });		
	}	
	
	
	playStopClickHandler = () => {		  
		this.setState(prevState => ({playStop : !prevState.playStop}));
		if(this.state.playStop){
			clearInterval(this.timerId);
		}else{
			this.timerId = setInterval(() => this.tick(),1000);
		}		
	}
	
	tick = () => {
		let secs = +this.state.secondes;		
		let mins = this.state.minutes;
		if(mins === 0){
			if(secs === 0){
				secs = 59;
				if(this.state.sessionOn){
					this.setState({minutes:this.state.breakLength,sessionOn:false,breakOn:true});
				}else{
					this.setState({sessionOn:true,breakOn:false,minutes:this.state.sessionLength});
				}
			}else{
				secs = secs - 1;
				this.setState({secondes:secs,minutes:mins});
			}
		}else{			
			if(secs === 0){
				mins = mins - 1;
				secs = 59;
			}else{
				secs = secs - 1;
			}
			this.setState({secondes:secs,minutes:mins});
		}		
	}
	
	render(){		
		
		return(
			<div className='app-container'>
			  <MainTitle />
			  <Length breakLength={this.state.breakLength}
			          onIncrementBreakClick={this.incrementBreakClickHandler}			          
			          onDecrementBreakClick={this.decrementBreakClickHandler}			          
			          sessionLength={this.state.sessionLength}
			          onIncrementSessionClick={this.incrementSessionClickHandler}
			          onDecrementSessionClick={this.decrementSessionClickHandler}/>
			  <Timer 
			         sessionLength={this.state.minutes}  
			         secs={this.state.secondes}
			         onResetTimerClick={this.resetTimerClickHandler}
			         onPlayStopClick={this.playStopClickHandler}
			         sessionOn = {this.state.sessionOn}/>
			</div>
		);
	}
}

export default App;
