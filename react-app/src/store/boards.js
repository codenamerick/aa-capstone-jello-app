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
const DRAG_CARD = 'boards/MOVE_CARD';

// Member consts
const POST_MEMBER = "members/POST_MEMBER";

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

const editCard = (card, boardId) => ({
    type: EDIT_CARD,
    card,
    boardId
});

const deleteCard = (list, cardId) => ({
    type: DELETE_CARD,
    list,
    cardId
});

const dragCard = (
    boardId,
    board,
    dragListIndex,
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => ({
    type: DRAG_CARD,
    payload: {
        boardId,
        board,
        dragListIndex,
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
    }
});

//Member actions
const postMember = (board) => ({
    type: POST_MEMBER,
    board,
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

export const editCardThunk = (card, boardId) => async(dispatch) => {
    const listId = card.get('listId');
    const cardId = card.get('cardId');
    const res = await fetch(`/api/boards/${boardId}/lists/${listId}/cards/${cardId}`, {
        method: 'PUT',
        body: card
    });

    const data = await res.json();
    dispatch(editCard(data, boardId));

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

export const dragCardThunk = (
    boardId,
    board,
    dragListIndex,
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => async(dispatch) => {
    // const dragData = {
    //     dragListIndex: dragListIndex,
    //     droppableIdStart: droppableIdStart,
    //     droppableIdEnd: droppableIdEnd,
    //     droppableIndexStart: droppableIndexStart,
    //     droppableIndexEnd: droppableIndexEnd,
    //     draggableId: draggableId,
    //     dragType: type,
    // }

    // console.log('before FETCH-----: ', board)

    // const res = await fetch(`/api/boards/${boardId}/dragList`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(dragData),
    // });

    // const data = await res.json();
    // console.log('After FETCH-------', data)
    dispatch(dragCard(
        boardId,
        board,
        dragListIndex,
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
    ));
    // dispatch(dragCard(data));

    // return data;
};

//Member thunks
export const postMemberThunk = (boardId) => async (dispatch) => {
    // console.log('THUNK---: ', boardId)
    const response = await fetch(`/api/boards/${boardId}/members`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    dispatch(postMember(data));

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
            console.log('list BEFORE change: ', newState[action.list.board_id].lists);
            const listIndex = newState[action.list.board_id].lists.findIndex((list) => list.id === action.list.id);
            newState[action.list.board_id].lists[listIndex] = action.list;
            newState[action.list.board_id].lists = newState[action.list.board_id].lists.slice()
            console.log('list AFTER change: ', newState[action.list.board_id].lists);
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
        case EDIT_CARD:
            newState = {...state};
            const editCardListIndex = newState[action.boardId].lists.findIndex((list) => list.id === action.card.list_id);
            const editCardsList = newState[action.boardId].lists[editCardListIndex].cards;
            const editCardIndex = editCardsList.findIndex((card) => card.id === action.card.id);
            newState[action.boardId].lists[editCardListIndex].cards[editCardIndex] = action.card;

            return newState;
        case DELETE_CARD:
            newState = {...state};
            const deleteCardListIndex = newState[action.list.board_id].lists.findIndex((list) => list.id === action.list.id);
            const cardsList = newState[action.list.board_id].lists[deleteCardListIndex].cards;
            const deleteCardIndex = cardsList.findIndex((card) => card.id === action.cardId);
            newState[action.list.board_id].lists[deleteCardListIndex].cards.splice(deleteCardIndex, 1);
            newState[action.list.board_id].lists = newState[action.list.board_id].lists.slice();

            return newState;
        case DRAG_CARD:
            newState = {...state};
            // console.log('MY STATE----: ', newState);
            // console.log('DRAG card ACTION---: ', action);

            // newState[action.payload.boardId.id] = action.payload.boardId;

            // console.log('MOVE CARD state----: ', newState[action.boardId].lists[action.droppableIndexStart].cards);

            // console.log('LIST INDEXXXX----: ', newState[action.boardId].lists[action.dragListIndex])

            // move list itself
            if (action.payload.type === 'list') {
                const list = newState[action.payload.boardId].lists.splice(action.payload.droppableIndexStart, 1);
                // console.log('reducer LIST----: ', list)

                newState[action.payload.boardId].lists.splice(action.payload.droppableIndexEnd, 0, ...list);

                // console.log('STATEEEE-----: ', newState)

                return newState;
            }

            // move card in same list
            if (action.payload.droppableIdStart === action.payload.droppableIdEnd) {
                const listCopy = newState[action.payload.boardId].lists[action.payload.dragListIndex].cards.slice()

                const card = listCopy.splice(action.payload.droppableIndexStart, 1);
                listCopy.splice(action.payload.droppableIndexEnd, 0, ...card);

                // console.log('list copy from REDUCER---: ', card);
                const newList = {
                    ...newState[action.payload.boardId].lists[action.payload.dragListIndex],
                    cards: listCopy,
                };

                // console.log('NEW LIST---: ', newList);

               newState[action.payload.boardId].lists[action.payload.dragListIndex].cards = newList.cards;

                newState[action.payload.boardId].lists = newState[action.payload.boardId].lists.slice()

                // console.log('STATEEEE----: ', newState)
            }

            // move card from one list to another
            if (action.payload.droppableIdStart !== action.payload.droppableIdEnd) {
                const listSource = newState[action.payload.boardId].lists.find(list => +action.payload.droppableIdStart === list.id);

                const listDestination = newState[action.payload.boardId].lists.find(list => +action.payload.droppableIdEnd === list.id);

                const card = listSource.cards.splice(action.payload.droppableIndexStart, 1);

                // console.log('LIST SOURCE--->> ', card)

                listDestination.cards.splice(action.payload.droppableIndexEnd, 0, ...card);
            }

            return newState;
        case POST_MEMBER:
            newState = {...state};
            // console.log('REDUCER!!---: ', action)
            // boardId = action.board.id;
            // if (boardId) {
            //     newState[boardId].members = action.board.members;
            //     newState[boardId].member_list = action.board.member_list;
            // }
            return newState;
        case 'logout':
            newState = {};
            return newState;
        default:
            return state;
    }
}
