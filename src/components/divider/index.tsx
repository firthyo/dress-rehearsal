import React from 'react';

import { Line } from './styles';

type Props = {
  marginVertical?: number;
  marginHorizontal?: number;
};

export const Divider: React.FC<Props> = ({ marginVertical = 0, marginHorizontal = 0 }) => {
  return <Line className="divider" marginHorizontal={marginHorizontal} marginVertical={marginVertical} />;
};

export default Divider;
