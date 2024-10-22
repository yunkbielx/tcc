import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

    return(
        <div className='pagina-cliente pagina2'>
            <img src="/assets/images/img1.png" alt="corte de cabelo" />
            <img src="/assets/images/img2.png" alt="corte de cabelo" />
            <img src="/assets/images/img3.png" alt="corte de cabelo" />
            <h2>Sobre</h2>
            <p>Bem-vindo à Ale Barber! Aqui, a gente não faz só cortes; a gente cria experiências. Somos um time de apaixonados por estilo, prontos para transformar seu visual e elevar sua autoestima.
Desde a nossa abertura, a ideia é simples: oferecer um espaço descontraído, onde você pode relaxar, bater um papo e sair se sentindo incrível. A gente acredita que cada detalhe conta, desde um corte bem feito até aquele atendimento acolhedor.
Seja pra dar um tapa no visual ou pra desestressar no dia a dia, estamos aqui pra te atender do jeitinho que você merece. Venha conhecer a gente e fazer parte da nossa família!</p>
            <h6>Horário de funcionamento 08: as 18:00</h6>
        </div>
    );
}