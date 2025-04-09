import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/HeaderX.jsx";

import "./Login.css"; // CSS separado

const Login = () => {
  const [tipoUsuario, setTipoUsuario] = useState("cliente");

  return (

    <>
      <Header />

    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">ENTRE COM SEUS DADOS</h2>

        <div className="user-type-selector">
          <button
            className={`user-type-btn ${tipoUsuario === "cliente" ? "active" : ""}`}
            onClick={() => setTipoUsuario("cliente")}
          >
            Cliente
          </button>
          <button
            className={`user-type-btn ${tipoUsuario === "barbeiro" ? "active" : ""}`}
            onClick={() => setTipoUsuario("barbeiro")}
          >
            Barbeiro
          </button>
        </div>

        <form className="login-form">
          <p>seu nome</p>
          <input type="text" placeholder="" />
          <p>email</p>
          <input type="email" placeholder="" />
          <p>senha</p>
          <input type="password" placeholder="" />
          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        <p className="login-footer">
          Não tem conta?{" "}
          <Link to="/cadastro" className="cadastro-link">Cadastre</Link>
        </p>
      </div>
    </div>
    
    </>

  );
};

export default Login;