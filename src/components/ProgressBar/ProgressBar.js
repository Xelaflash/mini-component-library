/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      "--height": 8 + "px",
      "--padding": 0,
      "--radius": 4 + "px",
    },
    medium: {
      "--height": 12 + "px",
      "--padding": 0,
      "--radius": 4 + "px",
    },
    large: {
      "--height": 16 + "px",
      "--padding": 4 + "px",
      "--radius": 8 + "px",
    },
  };

  const ProgressBarStyles = styled.div`
    padding: var(--padding);
    border-radius: var(--radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    background-color: ${COLORS.transparentGray15};
    /* trim off corners when progress bar is near full */
    overflow: hidden;
    `;

  const FillerWrapper = styled.div`
    border-radius: 4px;
    /* Trim off corners when progress bar is near-full. */
    overflow: hidden;
  `;

  const FillerStyles = styled.div`
    background: ${COLORS.primary};
    width: var(--width);
    height: var(--height);
    border-radius: 4px 0px 0px 4px;
  `;

    const styles = SIZES[size];
    if (!styles) {
      throw new Error(`Unknown size passed to ProgressBar: ${size}`);
    }

  return (
    <>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressBarStyles
        style={styles}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <FillerWrapper>
          <FillerStyles style={{ width: `${value}%` }} />
        </FillerWrapper>
      </ProgressBarStyles>
    </>
  );
};

export default ProgressBar;
