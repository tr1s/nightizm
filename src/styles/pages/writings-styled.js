/* Writings styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 14rem;
  padding-bottom: 140px;

  @media screen and (${(props) => props.theme.phone}) {
    padding: 0;
  }
`;

export const Logo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Posts = styled.ul`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 120px;
  @media screen and (${(props) => props.theme.tabletLarge}) {
    max-width: 520px;
    padding-bottom: 60px;
  }
  time {
    color: var(--red);
    font-size: 1.4rem;
    padding-bottom: 2rem;
    @media screen and (${(props) => props.theme.tabletLarge}) {
      font-size: 1.2rem;
    }
  }
`;

export const PostTitle = styled.h2`
  font-size: 5.8rem;
  line-height: 1.2;
  color: var(--grey-400);
  @media screen and (${(props) => props.theme.tabletLarge}) {
    font-size: 2.3rem;
  }
`;

export const PostDescription = styled.p`
  color: var(--grey-300);
  font-size: 1.9rem;
  line-height: 2.9rem;
  margin-top: 2rem;
  display: none;
  @media screen and (${(props) => props.theme.tabletLarge}) {
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-top: 0.5rem;
  }
  @media screen and (${(props) => props.theme.tablet}) {
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-top: 0.5rem;
  }
`;

export const Post = styled.li`
  &:not(:last-child) {
    margin-bottom: 10rem;
    @media screen and (${(props) => props.theme.tabletLarge}) {
      margin-bottom: 4rem;
    }
  }
  &:hover h2,
  &:focus h2 {
    text-shadow: var(--text-shadow);
    color: var(--white);
  }
  &:active h2 {
    color: red;
    color: var(--blue);
  }
  &:hover p,
  &:focus p {
    color: var(--grey-400);
  }

  @media screen and (${(props) => props.theme.tablet}) {
    text-align: center;
  }
`;
