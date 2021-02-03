import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import Square from './Square'
import { ItemTypes } from './constants';
import { useDrop } from 'react-dnd';

interface BoardSquareProps {
    x: number;
    y: number;
    moveAnimal: ( toX: number, toY: number ) => void;
}


const BoardSquare: FunctionComponent<BoardSquareProps> = (props: PropsWithChildren<BoardSquareProps>) => {
  const black = (props.x + props.y) % 2 === 1;
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ANIMAL,
    drop: () => props.moveAnimal(props.x, props.y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return( 
    <div
        ref={drop}
        style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        }}
    >
      <Square black={black}>{props.children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
      </div> )
}

export default BoardSquare;