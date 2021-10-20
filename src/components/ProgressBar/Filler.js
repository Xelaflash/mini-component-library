/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const FillerStyles = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  /* border-radius: inherit; */
  border-radius: 4px 0px 0px 4px;
  transition: width 0.2s ease-in;
`;



const Filler = ({value}) => {
  return <FillerStyles style={{ width: `${value}%` }} />;
}


export default Filler;
