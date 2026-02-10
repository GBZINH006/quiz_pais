import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    // aqui poderia validar login
    navigate("/quiz");
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="field">
          <label>Nome</label>
          <input
            type="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      {/* CSS NO FIM DO COMPONENTE */}
      <style>
        {`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          margin: 0;
          background: #f2f2f2;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          background: white;
          padding: 32px;
          width: 320px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .login-box h1 {
          text-align: center;
          margin-bottom: 24px;
        }

        .field {
          margin-bottom: 16px;
        }

        .field label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .field input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .field input:focus {
          outline: none;
          border-color: #2563eb;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }
        `}
      </style>
    </div>
  );
}

export default Login;
