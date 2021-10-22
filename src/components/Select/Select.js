import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

// const Select = ({ label, value, onChange, children }) => {
//   const SelectStyles = styled.select`
//     color: ${COLORS.gray700};
//     font-size: 16px;
//     width: fit-content;
//     padding: 12px;
//     border: none;
//     background-color: ${COLORS.transparentGray15};
//     border-radius: 8px;
//     /* appearance: none; */
//     &:hover {
//       color: ${COLORS.black};
//     }
//     label {
//       border: 1px solid red;
//     }
//   `;

//   const displayedValue = getDisplayedValue(value, children);

//   // !! For this one i miss the select adapting to option text width && the chevron icon.
//   // you can remove the default chevron by setting appearance: none;

//   return (
//     <>
//       <SelectStyles value={value} onChange={onChange}>
//         {/* <Icon id="chevron-down" /> */}
//         {children}
//       </SelectStyles>
//     </>
//   );
// };

// export default Select;


// Correction implementation
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
