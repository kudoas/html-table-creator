import React from 'react';

import { css, Global } from '@emotion/core';

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
          a {
            text-decoration: none;
          }
        }
      }
    `}
  />
);

export default GlobalCSS;
