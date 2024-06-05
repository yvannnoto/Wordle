import React from 'react';

import { range } from '../../utils';

import { checkGuess } from '../../game-helpers';

function Guess(props) {

  const { word, answer } = props;

  if (word) {

    const checkedWord = checkGuess(word, answer);

    return (
      <p class="guess">
        {checkedWord.map((guess, index) => (
          <span className={`cell ${guess.status}`} key={index}>{guess.letter}</span>
        ))}
      </p>
    )

  } else {

    return (
      <p class="guess">
        {range(5).map((index) => (
          <span className="cell" key={index}></span>
        ))}
      </p>
    )
  }
}

export default Guess;
