// Board consts
const GET_BOARDS = 'boards/GET_BOARDS';
const CREATE_BOARD = 'boards/CREATE_BOARD';

// Board actions
const getBoards = (boards) => ({
    type: GET_BOARDS,
    boards
});

const createBoard = (board) => ({
    type: CREATE_BOARD,
    board
});

// Board Thunks
export const getBoardsThunk = () => async(dispatch) => {
    const res = await fetch(`/api/boards/`);
    const data = await res.json();

    dispatch(getBoards(data.boards));

    return data.boards;
};

export const createBoardThunk = (board) => async(dispatch) => {
    const res = await fetch(`/api/boards/`, {
        method: 'POST',
        body: board
    });

    const data = await res.json();
    dispatch(createBoard(data));

    return data;
}

// Boards reducer
export default function boardReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_BOARDS:
            newState = {...state};

            for (let board of action.boards) {
                newState[board.id] = board;
            }

            return newState;
        case CREATE_BOARD:
            return {...state, [action.board.id]: action.board};
        case 'logout':
            newState = {};
            return newState;
        default:
            return state;
    }
}
