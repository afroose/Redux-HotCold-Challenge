export const NEW_GAME = 'NEW_GAME';
export const newGame = () =>({
  type: NEW_GAME,
  correctAnswer: Math.floor(Math.random() * 100) + 1
});
export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = (guess) => ({
  type: NEW_GUESS,
  guess
});