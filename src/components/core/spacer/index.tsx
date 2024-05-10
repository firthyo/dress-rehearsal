import React from 'react';

import { FlexBox } from './styles';

type Props = {
  x?: number;
  y?: number;
};

const SPACING = 1;

export const Spacer: React.FC<Props> = ({ x, y }) => {
  return <FlexBox width={x && x * SPACING} height={y && y * SPACING} />;
};

export default Spacer;
