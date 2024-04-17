import { useEffect, useState } from 'react';
import { Header } from './components/Headers';
import { Honeycomb } from './components/Honeycomb';
import { Guess } from './components/Guess';
import { Score } from './components/Score';
import { CorrectGuesses } from './components/CorrectGuesses';
import { useToast } from './components/Toast';
import { HelpModal } from './components/helpModeal';

interface GameData {
  displayDate: string;
  centerLetter: string;
  outerLetters: string[];
  answers: string[];
}

function App() {
  const [data, setData] = useState<GameData>();
  const [guess, setGuess] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);

  const toast = useToast();

  const addLetter = (letter: string) => {
    setGuess((g) => g + letter);
  };

  const removeLetter = () => {
    setGuess(guess.slice(0, -1));
  };

  const addCorrectGuees = (guess: string) => {
    setCorrectGuesses([...correctGuesses, guess]);
  };

  const checkGuess = () => {
    if (guess.length < 4) {
      console.log(guess);
      toast.open(`كلمة من أربعة أحرف وأكثر !`);
    } else if (correctGuesses.includes(guess)) {
      console.log('مذكورة ', guess);
      toast.open(`خمنت هذه الكلمة مسبقا`);
    } else if (data?.answers && data?.answers.includes(guess)) {
      addCorrectGuees(guess);
      console.log('صحيح', guess);
      // const theScore = correctGuesses.map((g) => {
      //   if (g.length === 4) {
      //     return '+1';
      //   } else {
      //     return `+${g.length}`;
      //   }
      // });

      toast.open(`أحسنت ، كلمة صحيحة `);
      //theScore = [''];
    } else {
      toast.open(`الكلمة ليست ضمن ضائمة الأجوبة`);
      console.log('الكلمة ليست في القائمة');
    }

    setGuess('');
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/api/data.json', {
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await result.json();

      setData(json.data.today);
    }
    fetchData();
  }, []);
  const [isHelpModalOpen, setHelpModalOpen] =
    useState<boolean>(false);

  const handleOpenHelpModal = () => {
    setHelpModalOpen(true);
  };
  const handleCloseHelpModal = () => {
    setHelpModalOpen(false);
  };

  return (
    <>
      {data ? (
        <>
          <Header date={data.displayDate} />
          <button onClick={handleOpenHelpModal}>مساعدة</button>
          <HelpModal
            isOpen={isHelpModalOpen}
            onClose={handleCloseHelpModal}
          />
          <Score correctGuesses={correctGuesses}></Score>
          <CorrectGuesses
            correctGuesses={correctGuesses}
          ></CorrectGuesses>

          <section className="container">
            <div className="inputs">
              <div className="center">
                <Guess guess={guess}></Guess>
                <Honeycomb
                  centerLetter={data.centerLetter}
                  outerLetters={data.outerLetters}
                  addLetter={addLetter}
                  removeLetter={removeLetter}
                  checkGuess={checkGuess}
                ></Honeycomb>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>...Loading</p>
      )}
    </>
  );
}

export default App;
