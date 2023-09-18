import Login from '../components/login'
import '../assets/styles/auth.css'
import logo from '../assets/images/logo.svg'
const Auth = () => {
  return (
    <div className="webox">
      <img src={logo} className="login-logo" alt="logo" />
      <Login />
    </div>
  )
}

export default Auth
