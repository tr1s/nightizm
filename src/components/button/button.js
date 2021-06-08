import React from 'react';
import Link from 'next/link';

import { HrefLink, ButtonLink } from './button-styled';

const Button = ({ type, text, href, linkPath, className }) => {
  if (type === 'link') {
    return (
      <Link href={linkPath}>
        <HrefLink className={`${className}`}>{text}</HrefLink>
      </Link>
    );
  }

  if (type === 'href') {
    return (
      <HrefLink href={href} className={`${className}`}>
        {text}
      </HrefLink>
    );
  }

  if (type === 'hrefOpenNew') {
    return (
      <HrefLink href={href} className={`${className}`} target="_blank" rel="noopener noreferrer">
        {text}
      </HrefLink>
    );
  }

  return (
    <>
      <ButtonLink className={`${className}`}>{text}</ButtonLink>
    </>
  );
};

export default Button;
