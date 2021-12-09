/* Global Styles
========================================================================== */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* Root Variables
  ========================================================================== */

  :root {
    --font-serif:
      Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times,
      Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    --font-sans-serif:
      -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
      Ubuntu, roboto, noto, arial, sans-serif;


    --font-heading: 'Amarante', var(--font-serif);
    --font-body: 'PT Serif', var(--font-sans-serif);
    --font-mono: 'MagdaCleanMono';
    --text-shadow: 0px 1px 10px var(--white-true);
    --title-size: 6px;

    --container-inner-width: 1000px;
    --container-max-width: 2560px;
    --border-radius: 6px;

    --black: hsl(0, 0%, 0%);
    --black-see-through: hsl(0, 0%, 1%, .7);
    --black-100: hsl(0, 0%, 1%);
    --black-200: hsl(220, 11%, 11%);
    --black-300: hsl(220, 11%, 13%);
    --black-soft: hsl(0, 0%, 15%);

    --grey-100: hsl(0, 0%, 10%);
    --grey-200: hsl(0, 0%, 25%);
    --grey-300: hsl(0, 0%, 47%);
    --grey-400: hsl(0, 0%, 73%);
    --grey-500: hsl(0, 0%, 96%);

    --slate: #a0aec0;

    --white: hsl(0, 0%, 99%);
    --white-true: hsl(0, 0%, 100%);

    --blue-100: hsl(221, 90%, 14%);
    --blue-300: hsl(221, 90%, 39%);
    --blue: hsl(221, 90%, 59%);
    --blue-soft: #acc0ff;
    --gold: #e8cc17;
    --yellow: #fbed68;
    --green: #17e878;
    --red-100: hsl(344, 82%, 10%);
    --red-200: hsl(344, 82%, 20%);
    --red-200: hsl(344, 62%, 30%);
    --red: hsl(344, 82%, 50%);
    --red: crimson;
    --pink: hsl(299, 100%, 90%);
    --purple: hsl(250, 56%, 81%);

    --primary: var(--blue);
    --secondary: var(--red);
    --accent: var(--red);
    --links: var(--accent);
    --mono: #cf3e64;
  }


  /* Global styles
  ========================================================================== */

  *::selection {
    ${'' /* background: rgba(255, 255, 255, .4); */}
    ${'' /* background: var(--blue); */}
  }

  html {
    font-size: 62.5%; /* 1rem = 10px, 3.5rem = 35px; */
    /* custom scrollbar for firefox, soon to be default? */
    scrollbar-width: normal;
    scrollbar-color: var(--accent) var(--black-soft);
    /* custom scrollbar for webkit (safari / chrome) */
    /* use vw unit if you don't want the scrollbar to grow on zoom */
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      border-left: 1px solid rgba(0, 0, 0, 0.3);
      background: rgba(254, 249, 247, 1);
      background: var(--black-soft);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--accent);
    }
  }

  body {
    color: var(--white);
    background: var(--black-100);
    font-size: 1.6rem;
    font-family: var(--font-mono);
  }

  main {
    flex: 1;
    padding-top: 67px;
  }

  .wrapper {
    margin: 0 auto;
    max-width: var(--container-max-width);
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .inner-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (${(props) => props.theme.laptop}) {
      padding: 0 2rem;
    }
    @media screen and (${(props) => props.theme.tabletLarge}) {
      padding: 0 2rem;
    }
    @media screen and (${(props) => props.theme.phone}) {
      padding: 0 1.5rem;
    }
  }

  /* Global typography styles
  ========================================================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: var(--font-heading);
  }

  h1 {
    line-height: 1.2;
    font-size: clamp(5.8rem, 17.1rem, 11vw);
    font-weight: 100;
    @media screen and (${(props) => props.theme.phone}) {
      font-size: 4rem;
    }
  }
  h2 {
    font-size: 5.8rem;
    font-weight: 100;
    line-height: 1.2;
  }
  h3 {
    font-size: 3.6rem;
    font-weight: 100;
    line-height: 1.4;
  }
  h4 {
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1.4;
    font-family: var(--font-mono);
    text-shadow: var(--text-shadow);
  }
  h5 {
    text-shadow: var(--text-shadow);
    font-family: var(--font-mono);
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: bold;
  }
  h6 {
    text-shadow: var(--text-shadow);
    font-family: var(--font-mono);
    font-size: 1.1rem;
    font-weight: bold;
  }

  div.double-header {
    padding: 10rem 0 5rem 0;
    @media screen and (${(props) => props.theme.tabletLarge}) {
      padding-bottom: 4rem;
    }
    @media screen and (${(props) => props.theme.tablet}) {
      padding-bottom: 3.1rem;
    }
    @media screen and (${(props) => props.theme.phoneSmall}) {
      padding-top: 3rem;
      padding-bottom: 2.1rem;
    }
    h1.title {
      color: var(--black-200);
      margin-bottom: -10.5rem;
      text-align: center;
      @media screen and (${(props) => props.theme.laptopSmall}) {
        margin-bottom: -8rem;
      }
      @media screen and (${(props) => props.theme.tabletLarge}) {
        margin-bottom: -6rem;
      }
      @media screen and (${(props) => props.theme.tablet}) {
        font-size: 5.8rem;
        margin-bottom: 0rem;
      }
    }
    h1.subtitle {
      margin-bottom: 2rem;
      font-size: 17.3rem;
      font-size: clamp(5.8rem, 17.3rem, 11vw);
      text-align: center;
      color: var(--black);
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: var(--grey-300);
      @media screen and (${(props) => props.theme.tablet}) {
        display: none;
      }
    }
  }

  p,
  input,
  a,
  textarea,
  ::placeholder {
    margin: 0;
    font-size: 1.6rem;
    letter-spacing: 0.101rem;
    color: var(--white);
  }

  a {
    display: inline;
    text-decoration: none;
    color: var(--white);
  }
  a.selected {
    color: var(--accent) !important;
    font-weight: 900;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  figure {
    margin: 0;
  }

`;

export default GlobalStyles;
