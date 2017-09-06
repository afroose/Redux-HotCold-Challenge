import {NEW_GAME, NEW_GUESS} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
};

export const gameReducer = (state=initialState, action) => {
    switch(action.type){
        case 'NEW_GAME':
            return Object.assign({}, state, {
              correctAnswer: action.correctAnswer
            })
        case 'NEW_GUESS':
            
          const guess = parseInt(action.guess, 10);
          let feedback
          if (isNaN(guess)) {
              feedback = 'Please enter a valid number';
          }

          const difference = Math.abs(guess - state.correctAnswer);

          if (difference >= 50) {
              feedback = 'You\'re Ice Cold...';
          }
          else if (difference >= 30) {
              feedback = 'You\'re Cold...';
          }
          else if (difference >= 10) {
              feedback = 'You\'re Warm';
          }
          else if (difference >= 1) {
              feedback = 'You\'re Hot!';
          }
          else {
              feedback = 'You got it!';
          }

          return Object.assign({}, state, {
            feedback, // same as feedback: feedback,
            guesses: [...state.guesses, guess]
          })

        default:
            return state      
    }
}