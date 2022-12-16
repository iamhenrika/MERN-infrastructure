import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"

export default function AuthPage ({ setUser }) {
  return (
    <main>
      <h1>Authorization Page</h1>
      <SignUpForm setUser={setUser} />
      <br />
      <LoginForm setUser={setUser}/>
    </main>
  )
}