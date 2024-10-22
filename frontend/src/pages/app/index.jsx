import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

    return(
        <div className='pagina-cliente pagina'>
            <header className='cabecalho'>
                <img src="/assets/images/account.png" className='icone' />
               <div className='textos'>
                <p>Sobre</p>
                <p>Serviços</p>
                <p>Loja</p>
               </div>
               <div className='localiza-botao'>
                <Link to="/client" className='botao'>Agendar Horário</Link>
               </div>
            </header>
            <div className='texto'>
                <h1 className='barber'>Ale Barber</h1>
                <h2 className='titulo-text'>CURTA NOSSOS SERVIÇOS DE BARBEIRO</h2>
                <p className='introducao'>Hórario de funcionamento: 09:00 às 18:00</p>
                <div className='baixo'>
                    <Link to="/client" className='botao'>Agendar Horário</Link>
                </div>
            </div>


            <div className="sobre">
                <section className="about-section">
                    <div className="text">
                        <h2>Sobre</h2>
                        <p>
                        Bem-vindo à Ale Barber! Aqui, a gente não faz só cortes; a gente cria experiências. Somos um time de apaixonados por estilo, prontos para transformar seu visual e elevar sua autoestima. Desde a nossa abertura, a ideia é simples: oferecer um espaço descontraído, onde você pode relaxar, bater um papo e sair se sentindo incrível.
                        </p>

                        <p>
                        Seja pra dar um tapa no visual ou pra desestressar no dia a dia, estamos aqui pra te atender do jeitinho que você merece. Venha conhecer a gente e fazer parte da nossa família!
                        </p>

                        <p><strong>Horário de funcionamento:</strong> 08:00 às 18:00</p>
                    </div>

                    <div className="image-grid">
                        <img src="/assets/images/wader.jpg" alt="Barber 1" />
                     
                    </div>
                </section>
                
            <div className='serviços'>
                <section className="services-section">
                    <h2>Serviços</h2>
                    <p>
                    Transforme seu visual com nossos cuidados especializados. Aqui na Ale Barber, oferecemos uma experiência única, desde cortes clássicos até estilos modernos. Venha descobrir o seu estilo cu!

                    </p>
                </section>
                
            </div>
        </div>
    </div>
  );
}