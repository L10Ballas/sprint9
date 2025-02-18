import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useAcademia } from '../../contexts/AcademiaContext';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import '../Cliente/styles/homepage.css';

const ClienteHomePage = () => {
  const navigate = useNavigate();
  const { academias } = useAcademia();
  const { user } = useUser(); // Obter informações do usuário

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="homepage-container">
      <motion.header
        className="homepage-header"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <nav className="homepage-nav">
          <h1>FitTracker</h1>
          <ul>
            <li><a onClick={() => navigate('/academias')}>Academias</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            {user ? (
              <>
                <li><a onClick={() => navigate('/perfil')}>Meu Perfil</a></li>
                <li><a onClick={() => navigate('/recompensas')}>Recompensas</a></li>
                <li><a onClick={() => navigate('/logout')}>Sair</a></li>
              </>
            ) : (
              <>
                <li><a onClick={() => navigate('/login')}>Login</a></li>
                <li><a onClick={() => navigate('/signup')}>Cadastrar</a></li>
              </>
            )}
          </ul>
        </nav>
      </motion.header>

      {/* Seção Hero com imagem de fundo */}
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2>Transforme Seu Corpo com as Melhores Academias</h2>
        <p>Encontre a academia perfeita para você e comece sua jornada fitness hoje mesmo!</p>
        <button onClick={() => navigate('academias')} className="cta-button">Encontre Academias</button>
      </motion.section>

      {/* Seção de Anúncios */}
      <motion.section
        id="anuncios"
        className="anuncios-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2>Anúncios de Academias</h2>
        <Slider {...settings}>
          {academias.length > 0 ? (
            academias.map((academia) => (
              <div className="anuncio-card" key={academia.id}>
                <img src={academia.imagem} alt={academia.nome} />
                <h3>{academia.nome}</h3>
                <p>{academia.descricao}</p>
                <a onClick={() => navigate('/academias')} className="cta-button">Saiba Mais</a>
              </div>
            ))
          ) : (
            <div className="anuncio-card">
              <h3>Sem Anúncios Disponíveis</h3>
            </div>
          )}
        </Slider>
      </motion.section>

      {/* Seção Sobre Nós */}
      <motion.section
        id="sobre"
        className="sobre-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2>Sobre Nós</h2>
        <p>
          Somos uma empresa dedicada a conectar pessoas às melhores academias.
          Nosso objetivo é facilitar o acesso a uma variedade de opções de treinamento, ajudando você a encontrar a
          academia perfeita que atenda às suas necessidades e preferências.
        </p>
        <p>
          Acreditamos que o fitness é uma jornada pessoal e estamos aqui para apoiá-lo em cada passo do caminho.
          Nossa plataforma foi projetada para oferecer informações abrangentes sobre as academias disponíveis,
          incluindo descrições, avaliações e detalhes sobre as instalações. Queremos que você tenha todas as ferramentas
          necessárias para transformar sua vida através do fitness.
        </p>
        <p>
          Junte-se a nós e comece sua jornada em direção a uma vida mais saudável e ativa. Com a FitTracker, você está
          um passo mais perto de alcançar seus objetivos de saúde e bem-estar.
        </p>
      </motion.section>

      {/* Rodapé */}
      <footer className="homepage-footer">
        <p>&copy; 2024 Academia FitTracker. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ClienteHomePage;
