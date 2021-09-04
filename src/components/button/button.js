import React from 'react';
import Link from 'next/link';

import { Wrapper, Emoji, ButtonLink } from './button-styled';

const Button = ({ children, element, type, href, linkPath, className, emoji }) => {
  if (element === 'link') {
    return (
      <Wrapper>
        <Link href={linkPath} passHref>
          <ButtonLink type={type} as="a" className={className} emoji={emoji}>
            {children}
          </ButtonLink>
        </Link>
        {/* <Emoji>🏛</Emoji> */}
        <Emoji>🔱</Emoji>
      </Wrapper>
    );
  }

  if (element === 'href') {
    return (
      <Wrapper>
        <ButtonLink type={type} as="a" href={href} className={className} emoji={emoji}>
          {children}
        </ButtonLink>
        {/* <Emoji>🏛</Emoji> */}
        <Emoji>🔱</Emoji>
      </Wrapper>
    );
  }

  if (element === 'hrefOpenNew') {
    return (
      <Wrapper>
        <ButtonLink
          type={type}
          as="a"
          href={href}
          className={className}
          emoji={emoji}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </ButtonLink>
        {/* <Emoji>🏛</Emoji> */}
        <Emoji>🔱</Emoji>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ButtonLink type={type} className={className} emoji={emoji}>
        {children}
      </ButtonLink>
      {/* <Emoji>🏛</Emoji> */}
      <Emoji>🔱</Emoji>
    </Wrapper>
  );
};

export default Button;
