import React from 'react';
import styled from '@emotion/styled';

const Footer: React.FCX = ({ className }) => {
  return (
    <footer className={className}>
      <p>©︎ kudoa</p>
      <ul>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="https://github.com/Kudoas/html-table-creator">
            GitHub <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
