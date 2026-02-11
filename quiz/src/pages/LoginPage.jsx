import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/quiz");
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Bem-vindo 👋</h1>
        <p className="subtitle">Faça login para continuar</p>

        <div className="field">
          <label>Nome</label>
          <input
            type="text"
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

      <style>
        {`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          margin: 0;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at top, #2a5298, #1e3c72 60%, #0f2027);
          padding: 20px;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          padding: 50px 40px;
          width: 380px;
          border-radius: 20px;
          text-align: center;
          color: #fff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .login-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
        }

        .login-box h1 {
          margin-bottom: 10px;
          font-size: 2.4rem;
        }

        .subtitle {
          margin-bottom: 30px;
          opacity: 0.85;
        }

        .field {
          margin-bottom: 20px;
          text-align: left;
        }

        .field label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
          opacity: 0.85;
        }

        .field input {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .field input:focus {
          outline: none;
          border-color: #ffd700;
          box-shadow: 0 0 0 3px rgba(255,215,0,0.2);
        }

        button {
          width: 100%;
          padding: 14px;
          margin-top: 10px;
          font-size: 1.1rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          background: linear-gradient(45deg, #ffd700, #ffb300);
          color: #000;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
        }

        button:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 15px 35px rgba(255, 215, 0, 0.6);
        }
        `}
      </style>
    </div>
  );
}

export default Login;