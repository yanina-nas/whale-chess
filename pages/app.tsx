import React, { FunctionComponent, PropsWithChildren, useState } from 'react';
import Board from './Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



const App: FunctionComponent = () => {

    const [ position, setPosition ] = useState([ 0, 0 ]);

    const moveAnimal = (toX: number, toY: number) => {
        setPosition([ toX, toY ]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Board
            animalPosition={position}
            moveAnimal={moveAnimal}
            />
        </DndProvider>
    );
};

export default App;