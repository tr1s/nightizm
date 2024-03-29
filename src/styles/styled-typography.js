import { createGlobalStyle } from 'styled-components';

const TypographyStyles = createGlobalStyle`
  /* Font declarations
  ========================================================================== */

  /* amarante-regular - latin */
  @font-face {
    font-family: 'Amarante';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('/fonts/amarante-v8-latin-regular.woff2') format('woff2'),
      url('/fonts/amarante-v8-latin-regular.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  /* magda-clean-mono - latin */
  @font-face {
    font-family: 'MagdaCleanMono';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('/fonts/MagdaCleanMono-Regular.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  /* pt-serif-regular - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/pt-serif-v12-latin-regular.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-regular.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }
  /* pt-serif-700 - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/pt-serif-v12-latin-700.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-700.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }
  /* pt-serif-italic - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/pt-serif-v12-latin-italic.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-italic.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }
  /* pt-serif-700italic - latin */
  @font-face {
    font-family: 'PT Serif';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/pt-serif-v12-latin-700italic.woff2') format('woff2'),
      url('/fonts/pt-serif-v12-latin-700italic.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }
`;

export default TypographyStyles;
