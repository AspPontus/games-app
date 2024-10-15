import LoginForm from "../Components/Forms/LoginForm"

function Login() {
  return (
    <div className="login-modal">
        <h2 className="login-title">Log in</h2>
        <LoginForm location={"login-page"}/>
    </div>
  )
}



export default Login