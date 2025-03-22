import React from 'react'

function Register() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="InputName" className="form-label">Adınız</label>
                    <input type="email" className="form-control" id="InputName" aria-describedby="nameHelp" />

                </div>
                <div className="mb-3">
                    <label for="InputSurname" className="form-label">Soyadınız</label>
                    <input type="email" className="form-control" id="InputSurname" aria-describedby="surnameHelp" />

                </div>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Email Adresi</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Parola</label>
                    <input type="password" className="form-control" id="InputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Parola Tekrar</label>
                    <input type="password" className="form-control" id="InputPassword2" />
                </div>
                <button type="submit" className="btn btn-primary">Hesap Oluştur</button>
                <div><a href="/login">Zaten Hesabınız Var Mı? Giriş Yap</a></div>
            </form>
        </>
    )
}

export default Register;