import '../../index.css'
import '../../assets/styles/loginPage.css'
import PersonalInfo from './PersonalInfo'
import LoginInfo from './LoginInfo'

function LoginPage() {
    return (
        <div className="login-root">
            <div className="login-form-container">
                <form action="" className="registration-form">
                    <PersonalInfo />
                    <LoginInfo />
                </form>
            </div>
        </div>
    )
}

export default LoginPage