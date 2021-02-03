import React, { FunctionComponent, PropsWithChildren } from 'react';
import BoardSquare from './BoardSquare';
import Animal from './Animal';
import styled from '@emotion/styled';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


interface Point {
    x: number;
    y: number;
}

interface BoardProps {
    animalPosition: number[];
    moveAnimal: ( toX: number, toY: number ) => void;
}

const background = '/pattern.jpg'

function renderSquare(i, [animalX, animalY]: number[], moveAnimal: ( toX: number, toY: number ) => void) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const black = (x + y) % 2 === 1

  return (
    <div onClick={() => moveAnimal( x, y )} key={i} style={{ width: '12.5%', minHeight: '12.5%' }}>
      <BoardSquare x={x} y={y} moveAnimal={moveAnimal} >{renderPiece( x, y, [ animalX, animalY ] )}</BoardSquare>
    </div>
  )
};

function renderPiece(x, y, [animalX, animalY]) {
  const isAnimalHere = (x === animalX && y === animalY)
  if (isAnimalHere) {
    return <Animal type={'type'} />;
  }
}


const BoardElement = styled.div`
    width: 1000px;
    height: 1000px;
    background-image: url(${background});
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
`;

const Board: FunctionComponent<BoardProps> = (props: PropsWithChildren<BoardProps>) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, props.animalPosition, props.moveAnimal))
  }

  return (
      <BoardElement>
        {squares}
      </BoardElement>
  )
}

export default Board;

