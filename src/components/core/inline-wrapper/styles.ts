import styled from 'styled-components';

type Props = {
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
};

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;
