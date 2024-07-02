import React from 'react';

const ResponseList = ({ responses }) => {
  return (
    <ul>
      {responses.map((response, index) => (
        <li key={index}>
          {Object.keys(response).map((key, i) => (
            <span key={i}>{`${key}: ${response[key]} `}</span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default ResponseList;
