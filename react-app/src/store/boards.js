// Board consts
const GET_BOARDS = 'boards/GET_BOARDS';

// Board actions
const getBoards = (boards) => ({
    type: GET_BOARDS,
    boards
});

// Board Thunks
export const getBoardsThunk = () => async(dispatch) => {
    const res = await fetch(`/api/boards/`);
    const data = await res.json();

    dispatch(getBoards(data.boards));

    return data.boards;
};

// Boards reducer
export default function boardReducer(state = {}, action) {
    const newState = {...state};
    switch (action.type) {
        case GET_BOARDS:
            for (let board of action.boards) {
                newState[board.id] = board;
            }

            return newState;
        default:
            return state;
    }
}
