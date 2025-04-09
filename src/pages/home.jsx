import { useNavigate } from 'react-router-dom';
import Header from "../components/HeaderL.jsx";
import Footer from "../components/Footer.jsx";


function Home() {
    const navigate = useNavigate(); 

    function handleLogin() {
        navigate('/login')
      }
      
    return (
      <div className="app">

  
       <Header/>
  
  
      <div className="planos-container">
  
      <div className='texto-lateral'>
        <h2>SEU ESTILO, NOSSA ARTE!</h2>
        <p>Seja dono do seu estilo</p>
        </div>
  
          <div className="plano-card">
            <h2>Corte</h2>
            <p className="preco">R$ 39,90/mês</p>
            <p>Cortes ilimitados no mês.</p>
            <button className="assinar-btn">Assinar</button>
        </div>
  
        <div className="plano-card">
          <h2>Barba</h2>
          <p className="preco">R$ 29,90/mês</p>
          <p>Barba ilimitada no mês.</p>
          <button className="assinar-btn">Assinar</button>
        </div>
  
         <div className="plano-card">
          <h2>Corte + Barba</h2>
          <p className="preco">R$ 59,90/mês</p>
          <p>Plano completo para quem quer tudo na régua.</p>
          <button className="assinar-btn">Assinar</button>
        </div>
  
      </div>
  
      <Footer/>
      
      </div>
    )
  }
  
  
  export default Home