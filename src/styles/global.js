/* Global Styles
========================================================================== */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* Normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css
  /* https://necolas.github.io/normalize.css/
  ========================================================================== */

  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}


  /* Font declarations
  ========================================================================== */

  /* amarante-regular - latin */
  @font-face {
    font-family: 'Amarante';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('/fonts/amarante-v8-latin-regular.eot');
    src: local('Amarante'),
      url('/fonts/amarante-v8-latin-regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/amarante-v8-latin-regular.woff2') format('woff2'),
      url('/fonts/amarante-v8-latin-regular.woff') format('woff'),
      url('/fonts/amarante-v8-latin-regular.ttf') format('truetype'),
      url('/fonts/amarante-v8-latin-regular.svg#Amarante') format('svg');
  }

  /* magda-clean-mono - latin */
  @font-face {
    font-family: 'MagdaCleanMono';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('/fonts/MagdaCleanMono-Regular.eot');
    src: local('MagdaCleanMono'),
      url('/fonts/MagdaCleanMono-Regular.eot#iefix') format('embedded-opentype'),
      url('/fonts/MagdaCleanMono-Regular.woff') format('woff'),
      url('/fonts/MagdaCleanMono-Regular.ttf') format('truetype'),
      url('/fonts/MagdaCleanMono-Regular.svg#MagdaCleanMono') format('svg');
  }

  /* pt-serif-regular - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/pt-serif-v12-latin-regular.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-regular.woff') format('woff');
  }
  /* pt-serif-700 - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/pt-serif-v12-latin-700.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-700.woff') format('woff');
  }
  /* pt-serif-italic - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/pt-serif-v12-latin-italic.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-italic.woff') format('woff');
  }
  /* pt-serif-700italic - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/pt-serif-v12-latin-700italic.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-700italic.woff') format('woff');
  }


  /* Root Variables
  ========================================================================== */

  :root {
    --font-heading: 'Amarante';
    --font-body: 'PT Serif';
    --font-mono: 'MagdaCleanMono';
    --text-shadow: 0px 1px 11px var(--white-true);
    --title-size: 6px;

    --container-width: 1000px;
    --border-radius: 6px;

    --black: #000;
    --black-100: hsl(0, 0%, 1%);
    --black-200: hsl(220, 11%, 11%);
    --black-soft: hsl(200, 2%, 25%);
    --black-soft: hsl(0, 0%, 15%);
    --brown: hsl(41, 13%, 66%);
    --grey-100: hsl(0, 0%, 10%);
    --grey-200: hsl(0, 0%, 25%);
    --grey-300: hsl(0, 0%, 47%);
    --grey-400: hsl(0, 0%, 73%);
    --grey-500: hsl(0, 0%, 96%);
    --white: hsl(0, 0%, 99%);
    --white-true: hsl(0, 0%, 100%);

    --blue: hsl(221, 90%, 59%);
    --blue: #1786e8;
    --gold: #e8cc17;
    --yellow: #fbed68;
    --green: #17e878;
    --mono: #cf3e64;
    --red: hsl(344, 82%, 50%);
    --pink: hsl(299, 100%, 90%);
    --purple: hsl(250, 56%, 81%);

    --primary: var(--red);
    --secondary: var(--red);
    --accent: var(--purple);
    --accent: #fbed68;
    --accent: var(--red);


  }


  /* Global styles
  ========================================================================== */

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  *::selection {
    background: var(--blue);
  }

  #__next {
    /* Reference for when issue arises: */
    /* https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/11-exercises-pt-2 */
    /*
    create a stacking context without z-index.
    This ensures all portal content (modals and tooltips) will float
    above the next app
    */
    isolation: isolate;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px, 3.5rem = 35px; */
  }

  body {
    color: var(--white);
    background: var(--black-100);
    font-size: 1.6rem;
    font-family: var(--font-body);
    font-family: var(--font-mono);
    &::-webkit-scrollbar {
      width: 1rem;
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

  .wrapper {
    height: 100%;
  }

  .inner-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (${(props) => props.theme.desktop15}) {
      padding: 0 2rem;
    }
    @media screen and (${(props) => props.theme.tabletLarge}) {
      padding: 0 2rem;
    }
    @media screen and (${(props) => props.theme.mobileLarge}) {
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
    font-size: clamp(5.8rem, 17.1rem, 11vw);
    font-weight: 100;
    @media screen and (${(props) => props.theme.awkward}) {
      font-size: 4rem;
    }
  }
  h2 {
    font-size: 5.8rem;
    font-weight: 100;
  }
  h3 {
    font-size: 3.6rem;
    font-weight: 100;
  }
  h4 {
    text-shadow: var(--text-shadow);
    font-family: var(--font-mono);
    font-size: 2.2rem;
    font-weight: bold;
  }
  h5 {
    text-shadow: var(--text-shadow);
    font-family: var(--font-mono);
    font-size: 1.6rem;
    font-weight: bold;
  }
  h6 {
    text-shadow: var(--text-shadow);
    font-family: var(--font-mono);
    font-size: 1.1rem;
    font-weight: bold;
  }

  div.double-header {
    padding: 8rem 0;
    @media screen and (${(props) => props.theme.tablet}) {
      padding-top: 5.9rem;
      padding-bottom: 5.2rem;
    }
    h1.title {
      color: var(--black-200);
      margin-bottom: -10.5rem;
      text-align: center;
      @media screen and (${(props) => props.theme.desktop13}) {
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
    line-height: 2.4rem;
    letter-spacing: 0.101rem;
    color: var(--white);
  }

  a {
    display: inline-block;
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
