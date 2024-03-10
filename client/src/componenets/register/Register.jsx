import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Do'stlar</h3>
                <span className='loginDesc'>Do'stlaringiz va atrofingizdagi dunyo bilan bog'laning</span>
                </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input className='loginInput' placeholder='Username'></input>
                    <input className='loginInput' placeholder='Email'></input>
                    <input className='loginInput' placeholder='Password'></input>
                    <input className='loginInput' placeholder='Password Again'></input>
                    <button className='loginButton'>Ro'yxatdan o'ting</button>
                    <button className='loginRegisterButton'>Accauntingizga kiring</button>
                </div>
            </div>
            </div>
        </div>
    
  )
}
