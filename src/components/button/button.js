import Link from 'next/link';

import { Wrapper, Emoji, ButtonLink } from './button-styled';

const Button = ({ children, element, type, href, linkPath, className }) => {
  if (element === 'link') {
    return (
      <Wrapper>
        <Link href={linkPath} passHref>
          <ButtonLink type={type} as="a" className={className}>
            {children}
          </ButtonLink>
        </Link>
        <Emoji>🔱</Emoji>
      </Wrapper>
    );
  }

  if (element === 'href') {
    return (
      <Wrapper>
        <ButtonLink type={type} as="a" href={href} className={className}>
          {children}
        </ButtonLink>
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
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </ButtonLink>
        <Emoji>🔱</Emoji>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ButtonLink type={type} className={className}>
        {children}
      </ButtonLink>
    </Wrapper>
  );
};

export default Button;
