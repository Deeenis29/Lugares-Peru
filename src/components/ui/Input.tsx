import React from 'react';
import { InputProps } from '@/types/common';

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  error
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
          dark:focus:ring-amber-400 dark:focus:border-amber-400
          transition-colors
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${label?.replace(' ', '-').toLowerCase()}-error` : undefined}
      />
      {error && (
        <p 
          id={`${label?.replace(' ', '-').toLowerCase()}-error`}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;