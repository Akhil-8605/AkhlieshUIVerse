import React from 'react';

// Input field component with label and error support
const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  ...props
}) => {
  const fieldClass = error ? 'input-field error' : 'input-field';

  return (
    <div className={fieldClass}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
