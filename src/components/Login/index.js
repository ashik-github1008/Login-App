// Write your code here
import Home from '../Home'
// import onClickButton  from Home;

const Login = props => {
  const {className, onClick} = props
  return (
    <button className={className} onClick={onClick}>
      Login
    </button>
  )
}

export default Login
