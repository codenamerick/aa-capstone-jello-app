// Board consts
const GET_BOARDS = 'boards/GET_BOARDS';

// Board actions
const getBoards = (userId) => ({
    type: GET_BOARDS,
    userId
});

// Board Thunks
export const getBoardsThunk = (userId) => async(dispatch) => {
    const res = await fetch(`/api/boards/users/${userId}/`);
    const data = await res.json();
    console.log('boards res from thunk---: ', data.boards);
    dispatch(getBoards(data.boards));

    return data.boards;
};

// Boards reducer
export default function boardReducer(state = {}, action) {
    const newState = {...state};
    switch (action.type) {
        case GET_BOARDS:
            console.log('action from reducer---: ', action)
            for (let board of action.userId) {
                newState[board.id] = board;
            }

            return newState;
        default:
            return state;
    }
}
