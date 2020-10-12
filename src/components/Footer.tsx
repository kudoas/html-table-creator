import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const Component: React.FCX = ({ className }) => (
  <footer className={className}>
    <ul>
      <li>
        <FacebookShareButton url={'https://html-table-creator.netlify.app/'}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={'https://html-table-creator.netlify.app/'}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
      <li>
        <LineShareButton url={'https://html-table-creator.netlify.app/'}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/contact">
          Contact <i className="far fa-envelope"></i>
        </Link>
      </li>
      <li>
        <a href="https://github.com/Kudoas/html-table-creator">
          GitHub <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/table">
          What is &lt;table&gt;?
        </a>
      </li>
    </ul>
    <p>
      <a href="https://twitter.com/kudoadd">©︎ kudoa</a>
    </p>
  </footer>
);

const StyledComponent = styled(Component)`
  p {
    text-align: center;
    margin-bottom: 20px;
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

export default StyledComponent;
