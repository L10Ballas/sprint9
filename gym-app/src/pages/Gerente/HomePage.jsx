import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import '../Gerente/styles/homepage.css';

const GerenteHomePage = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // Obter informações do usuário

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
          <h1>FitTracker - Gerente</h1>
          <ul>
            <li><a onClick={() => navigate('/gerente/manter-academia')}>Manter Academias</a></li>
            <li><a onClick={() => navigate('/gerente/estatisticas')}>Estatísticas</a></li>
            <li><a onClick={() => navigate('/gerente/anuncios')}>Anúncios</a></li>
            <li><a onClick={() => navigate('/gerente/perfil')}>Meu Perfil</a></li>
            <li><a onClick={() => navigate('/logout')}>Sair</a></li>
          </ul>
        </nav>
      </motion.header>

      {/* Seção de Boas-Vindas */}
      <motion.section
        className="welcome-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2>Bem-vindo, {user.email}!</h2>
        <p>Gerencie suas academias e veja suas estatísticas aqui.</p>
      </motion.section>

      {/* Rodapé */}
      <footer className="homepage-footer">
        <p>&copy; 2024 Academia FitTracker. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default GerenteHomePage;
