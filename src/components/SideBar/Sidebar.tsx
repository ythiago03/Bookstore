import React from 'react';

import './Sidebar.css';

const Sidebar = () => {
  
  const generos = [
    { 
      id: 0,
      genero: 'HQs, Mangás e Graphic Novels',
    },
    { 
      id: 1,
      genero: 'História',
    },
    { 
      id: 2,
      genero: 'Fantasia, Horror e Ficção Científica',
    },
    { 
      id: 3,
      genero: 'Crônicas, Humor e Entretenimento',
    },
    { 
      id: 4,
      genero: 'Literatura e Ficção',
    },
    { 
      id: 5,
      genero: 'Policial, Suspense e Mistério',
    },
    { 
      id: 6,
      genero: 'Romance',
    },
    { 
      id: 7,
      genero: 'Política, Filosofia e Ciências Sociais',
    }
  ];
  
  return (
    <nav className="sidebar">
      <h2>Gêneros</h2>
      <ul>
        {generos.map(genero => <li key={genero.id}>{genero.genero}</li>)}
      </ul>
    </nav>
  );
};

export default Sidebar;
