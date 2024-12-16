import React, { useState } from 'react';
import './Login.css';
import dnitLogo from '../assets/dnit-logo.jpg';
import documentImage from '../assets/gestao-de-documentos.jpg';
import userIcon from '../assets/user-icon.png';
import senhaIcon from '../assets/senha-icon.png';
import arrowIcon from '../assets/seta-direita.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <img src={dnitLogo} alt="DNIT Logo" className="dnit-logo" />

      <div className="login-box">
        <div className="login-left">
          <img src={documentImage} alt="Documentação" className="document-image" />
          <div className="sysdoc-logo">SysDOC</div>
        </div>

        <div className="login-right">
          <h1 className="title">Sistema de Documentação de sistemas</h1>
          <form>
            <label className="input-label">Login</label>
            <div className="input-group">
              <img src={userIcon} alt="User Icon" className="icon" />
              <input type="text" className="input-field" />
            </div>

            <label className="input-label">Senha</label>
            <div className="input-group">
              <img src={senhaIcon} alt="Senha Icon" className="icon" />
              <input type={showPassword ? 'text' : 'password'} className="input-field" />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>

            <div className="forgot-password">Esqueceu a senha?</div>

            <button type="submit" className="login-button">Entrar</button>

            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label>Lembrar?</label>
            </div>

            <div className="signup-link">
              Não tenho uma conta <img src={arrowIcon} alt="Seta Direita" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
