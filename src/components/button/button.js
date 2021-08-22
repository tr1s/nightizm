import React from 'react';
import Link from 'next/link';

import { HrefLink, ButtonLink } from './button-styled';

const Button = ({ children, type, href, linkPath, className }) => {
  if (type === 'link') {
    return (
      <Link href={linkPath} passHref>
        <ButtonLink as="a" className={className}>
          {children}
        </ButtonLink>
      </Link>
    );
  }

  if (type === 'href') {
    return (
      <ButtonLink as="a" href={href} className={className}>
        {children}
      </ButtonLink>
    );
  }

  if (type === 'hrefOpenNew') {
    return (
      <ButtonLink
        as="a"
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ButtonLink>
    );
  }

  return (
    <>
      <ButtonLink className={className}>{children}</ButtonLink>
    </>
  );
};

export default Button;
