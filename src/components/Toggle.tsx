import React from 'react';
import styled from '@emotion/styled';

type Props = {
  checked: boolean;
  onClick: () => void;
};

const Component: React.FCX<Props> = ({ className, checked, onClick }) => (
  <label className={className}>
    <input type="checkbox" checked={checked} onClick={onClick} />
    <span className="slider round"></span>
  </label>
);

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  > input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;

export default StyledComponent;
