import React from 'react'

function Login() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Email Adresi</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Parola</label>
                    <input type="password" className="form-control" id="InputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Giriş Yap</button>
                <div><a href="/register">Hesap Oluşturun</a></div>
            </form>
        </>
    )
}

export default Login