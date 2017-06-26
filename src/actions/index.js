export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1,
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL,
});

export const GUESS = 'GUESS';
export const guess = (guess) =>({
    type: GUESS,
    guess
})