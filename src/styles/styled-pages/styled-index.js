/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Logo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.tablet}) {
    display: block;
    text-align: center;
    margin-bottom: 3.5rem;
  }
`;
