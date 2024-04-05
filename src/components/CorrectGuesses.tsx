import { FC, useState } from 'react';

interface Props {
  correctGuesses: string[];
}

export const CorrectGuesses: FC<Props> = ({ correctGuesses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openGuesses = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const closeGuesses = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <section className="correctGuesses">
      {isOpen ? (
        <ul>
          {correctGuesses.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : (
        <p>
          {correctGuesses?.length
            ? correctGuesses.length == 1
              ? 'كلمة'
              : correctGuesses.length == 2
              ? 'كلمتان'
              : `${correctGuesses.length} كلمات`
            : 'الكلمات الصحيحة'}{' '}
          .
        </p>
      )}
      {isOpen ? (
        <a className="close" href="#" onClick={closeGuesses}>
          {' '}
        </a>
      ) : correctGuesses.length > 0 ? (
        <a className="open" href="#" onClick={openGuesses}>
          {' '}
        </a>
      ) : null}
    </section>
  );
};
