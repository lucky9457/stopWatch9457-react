// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isclickedStart: false}

  startClick = () => {
    this.startInterval()
  }

  stopClick = () => {
    const {isclickedStart} = this.state
    if (isclickedStart) {
      this.setState(prevState => ({
        isclickedStart: !prevState.isclickedStart,
      }))
    }

    clearInterval(this.timerId)
  }

  resetClick = () => {
    const {isclickedStart} = this.state
    clearInterval(this.timerId)

    if (isclickedStart) {
      this.setState({
        minutes: 0,
        seconds: 0,
        isclickedStart: false,
      })
    } else {
      this.setState({
        minutes: 0,
        seconds: 0,
      })
    }
  }

  startInterval = () => {
    this.setState(prevState => ({
      isclickedStart: !prevState.isclickedStart,
    }))
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {minutes, seconds} = this.state
    if (seconds < 59) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    } else {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    }
    console.log(minutes, seconds)
  }

  render() {
    const {minutes, seconds, isclickedStart} = this.state

    let finalminutes
    if (minutes < 10) {
      finalminutes = `0${minutes}`
    } else {
      finalminutes = minutes
    }
    let finalsec
    if (seconds < 10) {
      finalsec = `0${seconds}`
    } else {
      finalsec = seconds
    }

    return (
      <div className="main-bac">
        <h1 className="startwatch">Stopwatch</h1>

        <div className="timer-cont">
          <div className="watchimageCont">
            <img
              className="imgg"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="timerpara">Timer</p>
          </div>
          <h1 className="timer-head">{`${finalminutes}:${finalsec}`}</h1>
          <div className="buttonCont">
            <button
              disabled={isclickedStart}
              onClick={this.startClick}
              className="btn1"
              type="button"
            >
              Start
            </button>
            <button onClick={this.stopClick} className="btn2" type="button">
              Stop
            </button>
            <button onClick={this.resetClick} className="btn3" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
