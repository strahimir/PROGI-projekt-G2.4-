import '../../index.css'
import '../../assets/styles/loginPage.css'

function PersonalInfo() {
    return (

        <>
            <fieldset className="personal-info">
                <legend>Osobne informacije:</legend>
                <label htmlFor="name">
                    Ime:
                    <input type="text" name="name" />
                </label>
                <label htmlFor="surname">
                    Prezime:
                    <input type="text" name="surname" />
                </label>
                <label htmlFor="city">
                    Grad:
                    <input type="text" name="city" />
                </label>
                <label htmlFor="country">
                    Država:
                    <input type="text" name="country" />
                </label>
                <label htmlFor="phone">
                    Broj telefona:
                    <input type="number" name="phone" id="" />
                </label>
            </fieldset>
        </>

    )
}

export default PersonalInfo