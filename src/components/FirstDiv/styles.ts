import styled from "styled-components";

export const FirstDivLayout = styled.div`
  position: absolute;
  height: 544px;
  left: 0px;
  right: 0px;
  top: 104px;
  margin: 24px;
`;

export const TextDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: calc(50% - 588px / 2 - 266px);
  top: calc(50% - 192px / 2 - 82px);
`;

export const ImgDiv = styled.div`
  position: absolute;
  width: 476px;
  height: 360px;
  left: calc(50% - 476px / 2 + 322px);
  top: calc(50% - 360px / 2);
`;

export const GridTexts = styled.div`
  position: absolute;
  width: 567px;
  height: 84px;
  left: calc(50% - 567px / 2 - 276.5px);
  top: calc(50% - 84px / 2 + 122px);
`;
