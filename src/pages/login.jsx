import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/HeaderX.jsx";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState("cliente");

  // 1. Estados para email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // 2. Função para enviar login
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      // 3. Requisição POST para o backend
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        // 4. Salvar token JWT no localStorage
        localStorage.setItem("token", data.token);

        alert("Login realizado com sucesso!");

        // Redirecionar para página do tipo de usuário
        if (tipoUsuario === "cliente") {
          navigate("/painel-cliente");
        } else {
          navigate("/painel-barbeiro");
        }
      } else {
        alert("Erro no login: " + data.message);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleRegister() {
    navigate("/cadastro");
  }

  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">ENTRE COM SEUS DADOS</h2>

          <div className="user-type-selector">
            <button
              className={`user-type-btn ${
                tipoUsuario === "cliente" ? "active" : ""
              }`}
              onClick={() => setTipoUsuario("cliente")}
              type="button" // evita submit
            >
              Cliente
            </button>
            <button
              className={`user-type-btn ${
                tipoUsuario === "barbeiro" ? "active" : ""
              }`}
              onClick={() => setTipoUsuario("barbeiro")}
              type="button"
            >
              Barbeiro
            </button>
          </div>

          {/* 2. onSubmit para o form */}
          <form className="login-form" onSubmit={handleSubmit}>
           
            <p>Email</p>
            {/* 1. Controle dos inputs */}
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Entrando..." : "LOGIN"}
            </button>
          </form>

          <p className="login-footer">
            Não tem conta?{" "}
            <button className="register-button" onClick={handleRegister}>
              Cadastro
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
