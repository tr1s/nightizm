import styled from 'styled-components';

export const DiscographyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiscographyTitle = styled.h2`
  color: var(--black-200);
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  min-height: 0vh; /* fixes clamp bug in safari */
  font-weight: 100;
  padding: 10rem 0 5rem 0;
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
    flex-direction: column;
    align-items: center;
  }
`;
