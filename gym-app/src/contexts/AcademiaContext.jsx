// src/contexts/AcademiaContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AcademiaContext = createContext();

export function AcademiaProvider({ children }) {
  const [academias, setAcademias] = useState([]);

  const addAcademia = (novaAcademia) => {
    setAcademias((prevAcademias) => [...prevAcademias, novaAcademia]);
  };

  const removeAcademia = (id) => {
    setAcademias((prevAcademias) =>
      prevAcademias.filter((academia) => academia.id !== id)
    );
  };

  return (
    <AcademiaContext.Provider value={{ academias, addAcademia, removeAcademia }}>
      {children}
    </AcademiaContext.Provider>
  );
}

export function useAcademia() {
  return useContext(AcademiaContext);
}
