import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({

  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
// 1. we define an object of size
  const SIZES = {
    small: {
      fontSize: 16,
      borderSize: 1,
      iconSize: 16,
      height: 24,
    },

    large: {
      fontSize: 18,
      borderSize: 2,
      iconSize: 24,
      height: 36,
    },
  };

  const InputWrapper = styled.label`
    position: relative;
    display: block;
    color: ${COLORS.gray700};
    &:hover {
      color: ${COLORS.black};
    }
    `;


  const InputStyles = styled.input`
    /* 2. We set css values to a css var */
    font-size: var(--font-size);
    height: var(--height);
    width: var(--width);
    border: none;
    /*  we use the same var as height because it should be the same number */
    padding-left: var(--height);
    border-bottom: var(--border-thickness) solid ${COLORS.black};
    font-weight: 700;
    outline-offset: 2px;
    color: inherit;

    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
      font-size: 14px;
    }
  `;

  const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
  `;
  // here we say get SIZES object with key size coming from prop (here either small or large)
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Styles not provided`)
  }

  return (
    <>
      <InputWrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
          <Icon id={icon} size={styles.iconSize} />
        </IconWrapper>
        <InputStyles
          type="text"
          {...delegated}
          // 3. We initialize the css var as inline style
          style={{
            "--width": width + "px",
            "--height": styles.height / 16 + "rem",
            "--border-thickness": styles.borderSize + "px",
            "--font-size": styles.fontSize / 16 + "rem",
          }}
        />
      </InputWrapper>
    </>
  );
};

export default IconInput;
