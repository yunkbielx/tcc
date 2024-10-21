import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App pagina">

      <header className='cabecalho'>
        <img src="/assets/images/logo.png" className='logo'/>
        <div className='area-links'>
          <p>SOBRE NÓS</p>
          <p>SERVIÇOS</p>
        </div>
          <img src="/assets/images/text.png" className='text-foto' />
        <div className='area-links2'>
          <p>SHOP</p>
          <p>CONTATO</p>
        </div>
        <img src="/assets/images/contat.png" className='contat-foto' />
      </header>
      <div className='texto'>
        <h1 className='titulo-text'>Curta nossos serviços de barbeiro</h1>
        <p className='introducao'>Estabeleça seu novo visual incrível com os serviços da Ale Barber! De cortes de cabelo até a barbas perfeitas, você pode experimentar o melhor nivel de barbaria na área</p>
      </div>


        <div className='botoes'>
          <Link to="/client" className='botao'>Cadastrar</Link>
          <Link to="/client" className='botao'>Entrar</Link>
        </div>
        <div className='linha'></div>
        <div className='redes'>
          <img src="/assets/images/whatsapp.png" className='imgContat'/>
          <img src="/assets/images/facebook.png" className='imgContat'/>
          <img src="/assets/images/instagram.png" className='imgContat'/>
        </div>
    </div>
  );
}

