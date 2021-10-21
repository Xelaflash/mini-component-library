import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const SelectStyles = styled.select`
    color: ${COLORS.gray700};
    font-size: 16px;
    width: fit-content;
    padding: 12px;
    border: none;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    /* appearance: none; */
    &:hover {
      color: ${COLORS.black};
    }
    label {
      border:1px solid red;
    }
  `;


  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <SelectStyles value={value} onChange={onChange}>
        {/* <Icon id="chevron-down" /> */}
        {children}
      </SelectStyles>
    </>
  );
};

export default Select;
