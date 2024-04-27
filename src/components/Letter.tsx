/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

interface Props {
  letter: string;
  isCenter: boolean;
  addLetter: (arg0: any) => void;
}

export const Letter: FC<Props> = ({
  letter,
  isCenter,
  addLetter,
}) => {
  if (isCenter) {
    return (
      <svg
        className={'cell  center-letter'}
        viewBox="0 0 120 150"
        onClick={() => addLetter(letter)}
      >
        <polygon
          className="cell-fill"
          stroke="white"
          strokeWidth="5"
          points="0,37.5 40,37.5 60,0 80,37.5 120,37.5 99,75 120,112.5 80,112.5 60,150 40,112.5 0,112.5 21,75 "
        ></polygon>
        <text className="cell-letter" x="50%" y="45%" dy="0.35em">
          {letter}
        </text>
      </svg>
    );
  } else {
    return (
      <svg
        className={
          'cell' + (isCenter ? ' center-letter' : ' outer-letter')
        }
        viewBox="0 0 120 103.92304845413263"
        onClick={() => addLetter(letter)}
      >
        <polygon
          className="cell-fill"
          points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
          stroke="white"
          strokeWidth="5"
        ></polygon>
        <text className="cell-letter" x="50%" y="50%" dy="0.35em">
          {letter}
        </text>
      </svg>
    );
  }
};
