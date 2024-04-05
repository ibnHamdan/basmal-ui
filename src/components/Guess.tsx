import { FC } from 'react';

interface Props {
  guess: string;
}

export const Guess: FC<Props> = ({ guess }) => {
  return (
    <section className="guess">
      <p className="guess-letters">{guess}</p>
    </section>
  );
};
