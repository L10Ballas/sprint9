import React, { useEffect, useState } from 'react';

const MeuPerfil = ({ user }) => {
  const [perfil, setPerfil] = useState({ email: '', tag: '' });

  useEffect(() => {
    const fetchPerfil = async () => {
      const response = await fetch(`http://localhost:5000/meu-perfil/${user.id}`);
      const data = await response.json();
      setPerfil(data);
    };

    if (user) {
      fetchPerfil();
    }
  }, [user]);

  return (
    <div>
      <h1>Meu Perfil</h1>
      {user ? (
        <>
          <p>Email: {perfil.email}</p>
          <p>Tag: {perfil.tag}</p>
        </>
      ) : (
        <p>Você precisa estar logado para ver seu perfil.</p>
      )}
    </div>
  );
};

export default MeuPerfil;
