import styled from 'styled-components';

type PropsFlexBox = {
  width?: number;
  height?: number;
};

export const FlexBox = styled.div<PropsFlexBox>`
  display: ${props => (props.width && props.width > 0 ? 'inline-flex' : 'flex')};
  flex-grow: 0;
  flex-shrink: 0;
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
`;
