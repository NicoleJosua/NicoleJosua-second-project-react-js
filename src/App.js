import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/https://mail.google.com/mail/u/0?ui=2&ik=a45976be97&attid=0.1&permmsgid=msg-f:1737183370603565360&th=181bb712528a9130&view=att&disp=safe&realattid=181bb70db1d17b0c8931';

/**
 * // Conceitos importantes:
 * // Componente
 * // Propriedade
 * // Imutabilidade
 */


export default function App(){
  const [ projects, setProjects ] = useState([]);
  
  // useState retorna um array com 2 posicoes
  // 
  // 1. variavel com seu valor inicial 
  // 2. função para atualizacao deste valor 

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function addNewProject() {
    const response = await api.post('projects', {
      title: `GAGINI ${Date.now()}`,
      owner: "gigi gaby nicks"
    });

    const project = response.data;

    console.log(project);

    setProjects([...projects, project]); // spread operator
	
	// Logo abaixo, dentro do return temos o exemplo do fragment <>

  }

  return (
    <>
      <img width={200} src={https://mail.google.com/mail/u/0?ui=2&ik=a45976be97&attid=0.1&permmsgid=msg-f:1737183370603565360&th=181bb712528a9130&view=att&disp=safe&realattid=181bb70db1d17b0c8931} />
      <Header title="GAGINI">
        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
      </Header>
      <button type="button" onClick={addNewProject}>Acionar panteras</button>
    </>
  );
}