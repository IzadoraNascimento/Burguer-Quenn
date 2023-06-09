import React, {useState} from "react";
import Logo from "../../imagens/logo.png"


function FormLogin() {

  const [valueInputEmail, setValueInputEmail] = useState('')
  const [valueInputPassword, setValueInputPassword] = useState('')
  const handleEmail = (event) => {
     console.log(event.target.value)
  }

  return (
    <>
      <img src={Logo} />
      <form>
        <label>E-mail:</label>
        <input type="email" name="e-mail" defaultValue={valueInputEmail} placeholder="Digite seu e-mail" onChange={handleEmail}/>
        <br/>
        <label>Senha:</label>
        <input type="password" name="password" value={valueInputPassword} placeholder="Digite sua senha"/>
        <button>Entrar</button>
      </form>
    </>        
  )
}

export default FormLogin;