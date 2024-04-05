import { FC } from 'react';

interface Props {
  correctGuesses: string[];
}

export const Score: FC<Props> = ({ correctGuesses }) => {
  let score = 0;
  correctGuesses.map((g) => {
    if (g.length === 4) {
      score++;
    } else {
      score = score + g.length;
    }
  });

  return <p className="score">الدرجة: {score}</p>;
};
