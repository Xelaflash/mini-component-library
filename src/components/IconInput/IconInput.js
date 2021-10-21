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
  placeholder,
}) => {

  const SIZES = {
    small: {
      "--font-size": 16 + "px",
      "--borderSize": 1 + "px",
    },

    large: {
      "--font-size": 18 + "px",
      "--borderSize": 2 + "px",
    },
  };

  const InputWrapper = styled.div`
    /* display: flex; */
    border: 1px solid red;
    font-size: var(--font-size);
    font-weight: 700;
    border-bottom: var(--borderSize) solid ${COLORS.black};
    color: ${COLORS.gray700};
    &:hover {
      color: ${COLORS.black};
    }
  `;


  const InputStyles = styled.input`
    border: none;
    border: 1px solid green;
    width: ${(props) => props.width + "px"};
    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
      font-size: 14px;
    }
  `;
  const styles = SIZES[size];

  // !! icon not inline and therefore leads to issue with sizing all the rest is good

  return (
    <>
      <InputWrapper>
        <label>
          <VisuallyHidden>{label}</VisuallyHidden>
          <Icon id={icon} />
          <InputStyles
            type="text"
            placeholder={placeholder}
            style={styles}
            width={width}
          />
        </label>
      </InputWrapper>
    </>
  );
};

export default IconInput;
