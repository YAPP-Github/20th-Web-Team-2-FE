import { createGlobalStyle } from 'styled-components';
import { palette } from './palette';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SangjuGotgam';
    font-weight: normal;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sangju/SangjuGotgam.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sangju/SangjuGotgam.eot?#iefix') format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/sangju/SangjuGotgam.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/sangju/SangjuGotgam.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/sangju/SangjuGotgam.ttf') format("truetype");
    font-display: swap;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  textarea,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input,
  button,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }

  .swal2-container {
    z-index: 10600 !important;
  }

  .swal2-actions {
    width: 100%;
  }

  .swal2-popup {
    padding: 0;
    /* max-width: 300px; */
  }

  .swal2-title {
    font-size: 1.3rem;
    padding-top: 1.5rem;
    line-height: 1.7rem !important;
  }

  .swal2-html-container {
    /* margin: 1rem 4rem 0 !important; */
    line-height: 1.7rem !important;
  }

  .swal2-confirm {
    flex: 1 !important;
    background-color: ${palette.primary} !important;
    border-radius: 4px;

    &:focus {
      box-shadow: 0 0 0 3px ${palette.grayLight} !important;
    }
  }

  .swal2-cancel {
    flex: 1 !important;
    margin-right: 0 !important;
    border-radius: 4px;
    color: black !important;
    background-color: ${palette.white} !important;

    &:focus {
      box-shadow: 0 0 0 3px ${palette.grayLight} !important;
    }
  }
`;

export default GlobalStyles;
