import React from 'react';
import styled from '@emotion/styled';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const Footer: React.FCX = ({ className }) => {
  return (
    <footer className={className}>
      <ul>
        <li>
          <FacebookShareButton url={'#'}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={'#'}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </li>
        <li>
          <LineShareButton url={'#'}>
            <LineIcon size={32} round={true} />
          </LineShareButton>
        </li>
      </ul>
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
      <p>©︎ kudoa</p>
    </footer>
  );
};

const StyledFooter = styled(Footer)`
  p {
    text-align: center;
  }
  ul {
    text-align: center;
    li {
      display: inline-block;
      letter-spacing: 0.5px;
      margin: 10px;
      a:hover {
        border-radius: 5px;
        background-color: rgba();
      }
    }
  }
`;

export default StyledFooter;
