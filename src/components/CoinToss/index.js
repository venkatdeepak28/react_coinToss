// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossCount: 0, headsCount: 0, tailsCount: 0, isHeads: true}

  clickRandom = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevSate => ({
        tossCount: prevSate.tossCount + 1,
        headsCount: prevSate.headsCount + 1,
        isHeads: true,
      }))
    } else {
      this.setState(prevSate => ({
        tossCount: prevSate.tossCount + 1,
        tailsCount: prevSate.tailsCount + 1,
        isHeads: false,
      }))
    }
  }

  render() {
    let imgValue
    const {tossCount, headsCount, tailsCount, isHeads} = this.state
    if (isHeads === true) {
      imgValue = (
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      )
    } else {
      imgValue = (
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
        />
      )
    }
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {imgValue}
          <button
            className="custom-btn"
            type="submit"
            onClick={this.clickRandom}
          >
            Toss Coin
          </button>
          <ul className="list-prop">
            <li className="list-el">
              <p>Total: {tossCount}</p>
            </li>
            <li className="list-el">
              <p>Heads: {headsCount}</p>
            </li>
            <li className="list-el">
              <p>Tails: {tailsCount}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
