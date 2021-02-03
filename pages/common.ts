import styled from "@emotion/styled";

export const Colors = {
    YELLOW: 'yellow',
    BLUE: 'blue',
};

export const AnimalTypes =  {
    OCEAN: 'ocean',
    FOREST: 'forest',
};

export interface DragItem {
    type: string
};

export const ItemTypes = {
    ANIMAL: 'animal',
};

export interface Point {
    x: number;
    y: number;
};

export interface SVGIconProps {
    isFullWidth?: boolean;
    height?: number;
    width?: number;
    color?: string;
    draggable?: boolean;
  }
  
  export const SVGIcon = styled.div<SVGIconProps>`
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

