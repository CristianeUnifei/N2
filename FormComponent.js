import React, { useState } from 'react';
import questions from '../questions';

const FormComponent = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState(
    questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
    setFormData(
      questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
    ); // Limpar os campos após o envio
  };

  return (
    <form id="responseForm" onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div className="paragrafo" key={question.id}>
          <label htmlFor={question.id}>{question.text}</label>
          <select id={question.id} name={question.id} value={formData[question.id]} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="0">Não</option>
            <option value="1">Sim</option>
          </select>
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormComponent;
