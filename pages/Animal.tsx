import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { ItemTypes } from './constants'
import { useDrag } from 'react-dnd'

interface AnimalProps{
    isSorted?: boolean;
    type: string;
}


const Animal: FunctionComponent<AnimalProps> = () => {

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.ANIMAL },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div draggable ref={drag} 
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}>
            <StyledIcon draggable>
                <img draggable src={'/whale.svg'}/>
            </StyledIcon>
        </div>
    )
}

export default Animal;

interface Props {
    isFullWidth?: boolean;
    height?: number;
    width?: number;
    color?: string;
    draggable?: boolean;
}
  
const StyledIcon = styled.div<Props>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    svg {
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        fill: ${props => props.color};
        path {
            stroke: ${props => props.color};;
        }
    }
`;