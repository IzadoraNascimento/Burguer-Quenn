import React, {useState} from "react";
import Logo from "../../imagens/logo.png"
import "./FormLogin.css";


function FormLogin() {

  const [valueInputEmail, setValueInputEmail] = useState('')
  const [valueInputPassword, setValueInputPassword] = useState('')
  const handleEmail = (event) => {
     console.log(event.target.value)
  }

  return (
    <div class="container">
      <img class="logo" src={Logo} />
        <form>
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" name="e-mail" defaultValue={valueInputEmail} placeholder="Digite seu e-mail" onChange={handleEmail}/>
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input type="password" name="password" value={valueInputPassword} placeholder="Digite sua senha"/>
          </div>
          <button>Entrar</button>
        </form>
    </div>        
  )
}

export default FormLogin;