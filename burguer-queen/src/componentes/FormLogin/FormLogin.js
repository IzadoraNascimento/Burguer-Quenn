import React, {useState, useEffect} from "react";
import Logo from "../../imagens/logo2.png";
import "./FormLogin.css";
import { Link } from "react-router-dom";
import { postData } from "../../api";


function FormLogin() {

  const [valueInputEmail, setValueInputEmail] = useState('')
  const [valueInputPassword, setValueInputPassword] = useState('')
  const handleEmail = (event) => {
    setValueInputEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setValueInputPassword(event.target.value)
  }
useEffect (() => {
  postData("https://burger-queen-api-mock-rose.vercel.app/login", { valueInputEmail, valueInputPassword }).then((data) => {
    console.log("foi", data); // JSON data parsed by `data.json()` call
  });
})

  return (
    <div className="container">
      <img className="logo" src={Logo} />
        <form>
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" name="e-mail" defaultValue={valueInputEmail} placeholder="Digite seu e-mail" onChange={handleEmail}/>
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input type="password" name="password" defaultValue={valueInputPassword} placeholder="Digite sua senha" onChange={handlePassword}/>
          </div>
        </form>
        <button className="button"><Link to="/pagina-secundaria">Entrar</Link></button>
    </div>        
  )
}

export default FormLogin;