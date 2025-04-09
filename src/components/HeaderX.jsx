import { useNavigate } from 'react-router-dom';
import './Header.css'; 


function Header() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  return (
    <header className="header">
      <div className="logo-area">
        <img src="/logo.png" alt="Logo da barbearia" className="logo" />
        <div>
          <h1>BARBA CABELO BIGODE</h1>
          <p className="slogan">Sua barbearia por assinatura</p>
        </div>
      </div>
   
    </header>
  );
}

export default Header;