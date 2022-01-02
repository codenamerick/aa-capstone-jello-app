// Board consts
const GET_BOARDS = 'boards/GET_BOARDS';
const CREATE_BOARD = 'boards/CREATE_BOARD';
const EDIT_BOARD = 'boards/EDIT_BOARD';
const DELETE_BOARD = 'boards/DELETE_BOARD';

// List consts
const CREATE_LIST = 'boards/CREATE_LIST';
const EDIT_LIST = 'boards/EDIT_LIST';
const DELETE_LIST = 'boards/DELETE_LIST';

// Card consts
const CREATE_CARD = 'boards/CREATE_CARD';
const EDIT_CARD = 'boards/EDIT_CARD';
const DELETE_CARD = 'boards/DELETE_CARD';

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

// List actions
const createList = (board) => ({
    type: CREATE_LIST,
    board
});

const editList = (list) => ({
    type: EDIT_LIST,
    list
});

const deleteList = (list) => ({
    type: DELETE_LIST,
    list
});

// Card actions
const createCard = (list) => ({
    type: CREATE_CARD,
    list
});

const editCard = (list) => ({
    type: EDIT_CARD,
    list
});

const deleteCard = (list, cardId) => ({
    type: DELETE_CARD,
    list,
    cardId
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

// List Thunks
export const createListThunk = (board) => async(dispatch) => {
    const boardId = board.get('board_id');
    const res = await fetch(`/api/boards/${boardId}/lists`, {
        method: 'POST',
        body: board
    });

    const data = await res.json();
    dispatch(createList(data));

    return data;
};

export const editListThunk = (list) => async(dispatch) => {
    const boardId = list.get('board_id');
    const listId = list.get('id');
    const res = await fetch(`/api/boards/${boardId}/lists/${listId}`, {
        method: 'PUT',
        body: list
    });

    const data = await res.json();
    dispatch(editList(data));

    return data;
};

export const deleteListThunk = (list) => async(dispatch) => {
    const {board_id, id} = list
    const res = await fetch(`/api/boards/${board_id}/lists/${id}`, {
        method: 'DELETE',
    });

    const data = await res.json();
    dispatch(deleteList(data));

    return data;
};

// Cards Thunk
export const createCardThunk = (list) => async(dispatch) => {
    const boardId = list.get('board_id');
    const listId = list.get('list_id');
    const res = await fetch(`/api/boards/${boardId}/lists/${listId}/cards`, {
        method: 'POST',
        body: list
    });

    const data = await res.json();
    dispatch(createCard(data));

    return data;
};

export const deleteCardThunk = (list, cardId) => async(dispatch) => {
    const {board_id, id} = list
    const res = await fetch(`/api/boards/${board_id}/lists/${id}/cards/${cardId}`, {
        method: 'DELETE',
    });

    const data = await res.json();
    dispatch(deleteCard(data, cardId));

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
            return {...state, [action.board.id]: action.board};
        case EDIT_LIST:
            newState = {...state};
            const listIndex = newState[action.list.board_id].lists.findIndex((list) => list.id === action.list.id);
            newState[action.list.board_id].lists[listIndex] = action.list;
            newState[action.list.board_id].lists = newState[action.list.board_id].lists.slice()

            return newState;
        case DELETE_LIST:
            newState = {...state};
            const deleteIndex = newState[action.list.board_id].lists.findIndex((list) => list.id === action.list.id);
            newState[action.list.board_id].lists.splice(deleteIndex, 1);
            newState[action.list.board_id].lists = newState[action.list.board_id].lists.slice();

            return newState;
        case CREATE_CARD:
            newState = {...state};
            const cardListIndex = newState[action.list.board_id].lists.findIndex((list) => list.id === action.list.id);
            newState[action.list.board_id].lists[cardListIndex] = action.list;

            return newState;
        case DELETE_CARD:
            newState = {...state};
            const deleteCardListIndex = newState[action.list.board_id].lists.findIndex((list) => list.id === action.list.id);
            const cardsList = newState[action.list.board_id].lists[deleteCardListIndex].cards;
            const deleteCardIndex = cardsList.findIndex((card) => card.id === action.cardId);
            newState[action.list.board_id].lists[deleteCardListIndex].cards.splice(deleteCardIndex, 1);
            newState[action.list.board_id].lists = newState[action.list.board_id].lists.slice();

            return newState;
        case 'logout':
            newState = {};
            return newState;
        default:
            return state;
    }
}
