/* Footer styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.footer`
  /* backdrop-filter: blur(14px); */
  border-bottom: 2px dashed var(--grey-300);
`;

export const Footnotes = styled.p`
  padding: 2rem;
  color: var(--grey-300);
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 1.3rem;
  }
`;
