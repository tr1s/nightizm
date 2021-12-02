import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
  /*
    Josh's Custom CSS Reset (modified by tris)
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*.
    2. Remove default margins
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering and legibility
  */
  body {
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
    /* Reference for when issue arises: */
    /* https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/11-exercises-pt-2 */
    /*
    create a stacking context without z-index.
    This ensures all portal content (modals and tooltips) will float
    above the next app
  */
  #__next {
    isolation: isolate;
  }


`;

export default ResetStyles;
