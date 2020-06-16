import React from 'react';

import { css, Global } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
      html {
        font-size: 62.5%;
        body {
          font-family: 'Patrick Hand', cursive;
        }
      }
    `}
  />
);

export default GlobalCSS;
