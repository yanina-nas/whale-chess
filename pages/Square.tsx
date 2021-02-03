import styled from '@emotion/styled';
import React, { FunctionComponent, PropsWithChildren } from 'react';

interface SquareProps {
    black: boolean;
}


const Square: FunctionComponent<SquareProps> = (props: PropsWithChildren<SquareProps>) => {
  const fill = props.black ? '#049584' : '#884430';
  const stroke = props.black ? '#000059' : '#000019';

  return (
    <div style={{ 
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        }}
    >
        {props.children}
    </div>
  )
}

export default Square;