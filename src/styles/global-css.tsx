import React from 'react';

import { css, Global } from '@emotion/react';

export const GlobalCSS = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
      html {
        font-size: 62.5%;
        body {
          color: #09090f;
          font-family: 'Patrick Hand', cursive;
          font-size: 1.6em;
          margin: 0 auto;
          max-width: 1152px;
          background-color: #d7e7a9;
          h2 {
            font-size: 3.4rem;
            text-align: center;
          }
          a {
            text-decoration: none;
          }
        }
      }
    `}
  />
);

// #b5ddd1
// #d7e7a9
// #d3c0f9
// #f99a9c
// #fdbccf

export default GlobalCSS;
