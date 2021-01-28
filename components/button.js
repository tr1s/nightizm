import React from 'react';
import Link from 'next/link';

import styles from './button.module.scss';

const Button = ({ type, text, href, linkPath, className }) => {
  if (type === 'link') {
    return (
      <Link href={linkPath}>
        <a className={`${styles.link} ${className}`}>{text}</a>
      </Link>
    );
  }

  if (type === 'href') {
    return (
      <a href={href} className={`${styles.link} ${className}`}>
        {text}
      </a>
    );
  }

  if (type === 'hrefOpenNew') {
    return (
      <a
        href={href}
        className={`${styles.link} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <>
      <button className={`${styles.link} ${className}`}>{text}</button>
    </>
  );
};

export default Button;
