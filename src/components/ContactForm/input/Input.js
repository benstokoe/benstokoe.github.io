import React from 'react';
import classnames from 'classnames';
import './input.scss';

const Input = ({ type, error, ...props }) => {
  const Type = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="input__container">
      <Type type="text" className={classnames('input', { 'input--error': error })} {...props} />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

export default Input;
