import React from 'react';

const Button = ({ label, style, labelStyle }) => {
  return (
    <button className={`${style}`}>
      <span className={`${labelStyle}`}>{label}</span>
    </button>
  );
};

export default Button;
