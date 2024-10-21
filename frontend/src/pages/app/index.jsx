import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

    return(
        <div className='pagina-cliente pagina'>
            <header className='cabecalho'>
                <div className='area-cima'>
                    <img className='logo' src="/assets/images/profileicon.png"/>
                    <p>Sobre</p>
                    <p>Serviços</p>
                    <p>Loja</p>
                </div>
                <div className='area-links'>

                </div>
            </header>
        </div>
    );
}