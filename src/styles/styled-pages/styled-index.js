/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Logo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
    text-align: center;
    margin-top: 5rem;
  }
`;
