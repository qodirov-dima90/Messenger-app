import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Do'stlar</h3>
                <span className='loginDesc'>Do'stlaringiz va atrofingizdagi dunyo bilan bog'laning</span>
                </div>
            <div className='loginRight'>
                <div className='loginBox'>
                <input className='loginInput' placeholder='Email'></input>
                    <input className='loginInput' placeholder='Password'></input>
                    <button className='loginButton'>Kirish</button>
                    <span className='loginForgot'>Porolingizni tekshiring?</span>
                    <button className='loginRegisterButton'>Yangi accoun yarating</button>
                </div>
            </div>
            </div>
        </div>
    
  )
}
