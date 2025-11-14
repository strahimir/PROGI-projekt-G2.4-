import '../../index.css'
import '../../assets/styles/loginPage.css'

function LoginInfo() {
    return (
        <>
            <fieldset className="login-info">
                <legend>Prijava:</legend>
                <label htmlFor="email">
                    E-mail adresa:
                    <input type="email" name="email" />
                </label>
                <label htmlFor="password">
                    Lozinka:
                    <input type="password" name="password" />
                </label>
            </fieldset>
        </>
    )
}

export default LoginInfo