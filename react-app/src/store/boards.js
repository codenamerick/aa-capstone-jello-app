// Board consts
const GET_BOARDS = 'boards/GET_BOARDS';
const CREATE_BOARD = 'boards/CREATE_BOARD';
const EDIT_BOARD = 'boards/EDIT_BOARD';
const DELETE_BOARD = 'boards/DELETE_BOARD';

// List consts
const CREATE_LIST = 'boards/CREATE_LIST';

// Board actions
const getBoards = (boards) => ({
    type: GET_BOARDS,
    boards
});

const createBoard = (board) => ({
    type: CREATE_BOARD,
    board
});

const editBoard = (board) => ({
    type: EDIT_BOARD,
    board
});

const deleteBoard = (boardId) => ({
    type: DELETE_BOARD,
    boardId
});

const createList = (board) => ({
    type: CREATE_LIST,
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
};

export const editBoardThunk = (board) => async(dispatch) => {
    const boardId = board.get('id');
    const res = await fetch(`/api/boards/${boardId}`, {
        method: 'PUT',
        body: board
    });


    const data = await res.json();
    dispatch(editBoard(data));

    return data;
};

export const deleteBoardThunk = (boardId) => async(dispatch) => {
    const res = await fetch(`/api/boards/${boardId}`, {
        method: 'DELETE',
    });

    const data = await res.json();
    dispatch(deleteBoard(data.id));

    return data;
};

export const createListThunk = (board) => async(dispatch) => {
    const boardId = board.get('board_id')
    const res = await fetch(`/api/boards/${boardId}/lists`, {
        method: 'POST',
        body: board
    });

    console.log('list in THUNK---: ', res)
    const data = await res.json();
    dispatch(createList(data));

    return data;
};

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
        case EDIT_BOARD:
            return {...state, [action.board.id]: action.board};
        case DELETE_BOARD:
            newState = {...state};
            delete newState[action.boardId];

            return newState;
        case CREATE_LIST:
            console.log('CREATE LIST SLICE---: ', action)
            return {...state, [action.board.id]: action.board};
        case 'logout':
            newState = {};
            return newState;
        default:
            return state;
    }
}
