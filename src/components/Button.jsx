import React from 'react';

/**
 * Reusable Button/Link Component
 * @param {Object} props
 * @param {string} props.href - URL for link (if provided, renders as <a>)
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary' | 'outline'} props.variant - Button style variant
 * @param {boolean} props.external - Whether link opens in new tab
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-lg px-6 py-3 font-medium transition inline-block';

  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-transparent border-2 border-black hover:bg-black hover:text-white'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a href={href} className={combinedClassName} {...linkProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
