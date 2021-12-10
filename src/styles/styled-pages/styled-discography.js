import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  padding: 10rem 0 5rem 0;
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  min-height: 0vh; /* fixes clamp bug in safari */
  color: var(--black-200);
  @media screen and (${(props) => props.theme.phone}) {
    padding: 5rem 0 4.2rem 0;
  }
  @media screen and (${(props) => props.theme.phoneSmallest}) {
    font-size: 4rem;
  }
`;

export const Logo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.tablet}) {
    display: block;
    text-align: center;
    margin-bottom: 3.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 8rem;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
    flex-direction: column;
    align-items: center;
  }
`;
