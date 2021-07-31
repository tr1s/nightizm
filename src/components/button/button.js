import React from 'react';
import Link from 'next/link';

import { HrefLink, ButtonLink } from './button-styled';

const Button = ({ type, text, href, linkPath, className }) => {
  if (type === 'link') {
    return (
      <Link href={linkPath}>
        <ButtonLink as="a" className={className}>
          {text}
        </ButtonLink>
      </Link>
    );
  }

  if (type === 'href') {
    return (
      <ButtonLink as="a" href={href} className={className}>
        {text}
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
        {text}
      </ButtonLink>
    );
  }

  return (
    <>
      <ButtonLink className={className}>{text}</ButtonLink>
    </>
  );
};

export default Button;
