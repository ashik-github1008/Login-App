// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {login: false}

  onClickButton = () => {
    this.setState(prevState => ({
      login: !prevState.login,
    }))

    // const {login} = this.state
  }

  render() {
    const {login} = this.state

    const message = login ? 'Welcome User' : 'Please Login'

    return (
      <div className="app-container">
        <div className="main-container">
          <Message message={message} />
          {login && <Logout className="btn" onClick={this.onClickButton} />}
          {!login && <Login className="btn" onClick={this.onClickButton} />}
        </div>
      </div>
    )
  }
}

export default Home
