import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'

const Login = ({ onAdd }) => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [remember, setRemember] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!login){
            alert("Insira o login")
        }
        else if (!senha){
            alert("Senha incorreta")
        }

        else {
            onAdd({ login, senha, remember})
            window.location.href = "/main"
            setLogin('')
            setSenha('')
            setRemember('')
        }
    }
    return (
        <main>
        <form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Login</label>
				<input type="text" id="userLogin" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}></input>
                <label id="put-hidden">Usuário não encontrado</label>
            </div>
			<div className="form-control">
				<label>Senha</label>
				<input type="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <Router>
                    <Link to="/esqueceu">Esqueceu a senha?</Link>
                </Router>
            </div>
			<div className="form-check" style={{width: "150px"}}>
				<label style={{ marginRight:"10px"}}>Lembrar-me</label>
				<input type="checkbox" className="checkbox" value={remember} onChange={(e) => setRemember(e.currentTarget.checked)}></input>
            </div>
			<input type="submit" value="Entrar" className="btn btn-block"></input>
        </form>
        <footer className="social-media">
            <i className="pi pi-facebook" style={{'fontSize': '2em', marginRight: "10px"}}></i>
            <i className="pi pi-github" style={{'fontSize': '2em', marginRight: "10px"}}></i>
            <i className="pi pi-twitter" style={{'fontSize': '2em', marginRight: "10px"}}></i>
        </footer>
        </main>
    )
}

export default Login
