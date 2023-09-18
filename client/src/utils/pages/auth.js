import Login from '../components/login'
import Register from '../components/register'
import '../assets/styles/auth.css'
import logo from '../assets/images/logo.svg'
const Auth = () => {
  return (
    <div className="webox">
      <img src={logo} className="login-logo" alt="logo" />
      <Register />
    </div>
  )
}

export default Auth
