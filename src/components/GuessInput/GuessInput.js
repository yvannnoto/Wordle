import React, { useState } from 'react';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput(props) {

  const { answer } = props;

  const [guess, setGuess] = useState('');
  const [guessList, setGuessList] = useState([]);

  function formSubmit(event) {
    event.preventDefault();

    if (guessList.length <= NUM_OF_GUESSES_ALLOWED - 1) {
      setGuessList([...guessList, guess]);
      setGuess('');
    }
  }

  return <>
    <GuessResults guesses={guessList} answer={answer} />
    <form onSubmit={(event) => formSubmit(event)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input type="text" id="guess-input" value={guess} minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" onChange={(e) => setGuess(e.target.value.toUpperCase())} />
    </form>
  </>;
}

export default GuessInput;
