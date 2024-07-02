import React, { useEffect, useState } from 'react';
import FormComponent from './components/FormComponent';
import ResponseList from './components/ResponseList';
import './style.css';

const App = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9082/republica')
      .then(response => response.json())
      .then(data => setResponses(data))
      .catch(error => console.error('Erro ao carregar respostas:', error));
  }, []);

  const handleFormSubmit = (formData) => {
    fetch('http://localhost:9082/republica', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta recebida:', data);
        setResponses(prevResponses => [...prevResponses, formData]);
      })
      .catch(error => console.error('Erro ao enviar dados:', error));
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="menu">
          <ul>
           
            <li><a href="jogo.html" target="_blank" rel="noopener noreferrer">Questionário</a></li>
          </ul>
        </nav>
      </header>
      <h1 className="alinhamento">Relatório de Convivência: Perguntas para Melhorar a Vida na República</h1>
      <h3>O objetivo principal do aplicativo é ajudar a avaliar e melhorar a convivência e a organização dentro de uma república. Através de um questionário detalhado, os residentes podem refletir sobre diferentes aspectos da vida comunitária e identificar áreas que podem precisar de atenção ou ajustes.</h3>
      <FormComponent onFormSubmit={handleFormSubmit} />
      <ResponseList responses={responses} />
    </div>
  );
};

export default App;
