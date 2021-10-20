/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
import Filler from './Filler';

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      "--height": 8 + "px",
      "--padding": 0,
    },
    medium: {
      "--height": 12 + "px",
      "--padding": 0,
    },
    large: {
      "--height": 24 + "px",
      "--padding": 4 + "px",
    },
  };
  const styles = SIZES[size];

  const ProgressBarStyles = styled.div`
    height: var(--height);
    width: 370px;
    border-radius: 8px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
  `;

  return (
    <ProgressBarStyles
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Filler value={value} />
    </ProgressBarStyles>
  );
};

export default ProgressBar;
