import { useNavigate } from 'react-router-dom';
import Header from "../components/HeaderX.jsx";
import { useState } from 'react';

import "./cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  // 1. Criar estados para controlar os inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // 2. Função para enviar os dados para o backend
  async function handleSubmit(e) {
    e.preventDefault(); // evitar que a página recarregue

    // 3. Fazer a requisição POST para backend
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      } else {
        alert("Erro no cadastro: " + data.message);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor: " + error.message);
    }
  }

  return (
    <>
      <Header />
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">CADASTRO</h2>

          {/* 4. Passar a função handleSubmit para o onSubmit do form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <p>Seu Nome</p>
            {/* 5. Inputs controlados */}
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <p>Email</p>
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

            {/* 6. Botão de submit (não precisa onClick) */}
            <button type="submit" className="register-btn">
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
