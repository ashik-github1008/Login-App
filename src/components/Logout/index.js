// Write your code here

const Logout = props => {
  const {className, onClick} = props
  return (
    <button className={className} onClick={onClick}>
      Logout
    </button>
  )
}

export default Logout
