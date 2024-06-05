import React, { useState } from 'react';
import Guess from '../Guess/Guess';

import { range } from '../../utils';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults(props) {

  const { guesses, answer } = props;

  const guessFind = guesses.find((guess) => guess == answer);

  return (
    <div className="guess-results">
      {guessFind === answer ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      ) : <></>}
      {guesses.length === NUM_OF_GUESSES_ALLOWED & guessFind !== answer ? (
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      ) : <></>}
      {range(NUM_OF_GUESSES_ALLOWED).map(index => (
        <Guess word={guesses[index]} key={index} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
