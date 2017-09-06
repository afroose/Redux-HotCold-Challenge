import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import {newGame, newGuess} from '../actions';

export class Game extends React.Component {

    newGame() {
        this.props.newGuess([]);
        this.props.newGame()
    };

    guess(guess) {
        this.props.newGuess(guess);
    };
    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    };
}
export const mapStateToProps = store => ({
    // feedback
    // guesses
    feedback: store.feedback,
    guesses: store.guesses,
})
export const mapDispatchToProps= dispatch => ({
    newGame: () => dispatch(newGame()),
    newGuess: (guess) => dispatch(newGuess(guess)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Game)