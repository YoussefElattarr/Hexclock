import React, { Component } from 'react';

class Time extends Component{
    state = {
        hour:'',
        minute:'',
        seconds:'',
        time:''
    }
    
    changeHours(){
        var currentTime = new Date()
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        var secs = currentTime.getSeconds();
        if (hours < 10) {
            this.setState({hour: "0" + hours})
        }
        else{
            this.setState({hour:  hours})
        }
        if (minutes < 10) {
            this.setState({minute: "0" + minutes})
        }
        else{
            this.setState({minute:  minutes})
        }
        if (secs < 10) {
            this.setState({seconds: "0" + secs})
        }
        else{
            this.setState({seconds:  secs})
        }
        var color = "#" + this.state.hour + this.state.minute + this.state.seconds
        this.setState({time: color})
        document.body.style.backgroundColor = color
    }

    componentDidMount(){
          this.intervalID = setInterval(() => this.changeHours(),1000); 
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
      }
  
    render(){  
       return(
            <div  class="container" style={{ height: '100vh',display: 'flex', justifyContent: 'center', alignItems: "center"
            ,fontFamily: "Impact", fontSize: '60px' , color:'white'}}>
                WHAT TIME IS IT RIGHT NOW
                <br/>
                {this.state.time}
                </div> 
        ) 
    }
}
export default (Time);